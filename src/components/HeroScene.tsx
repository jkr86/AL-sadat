"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/* ── Particle ring ── */
function ParticleRing({ count = 100, radius = 4, color }: { count?: number; radius?: number; color: string }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      r: radius + Math.sin(i * 0.5) * 0.35,
      yOffset: Math.cos(i * 0.3) * 0.5,
    })),
  [count, radius]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    positions.forEach(({ angle, r, yOffset }, i) => {
      const a = angle + t * 0.1;
      dummy.position.set(Math.cos(a) * r, yOffset + Math.sin(t * 0.25 + i * 0.1) * 0.15, Math.sin(a) * r);
      dummy.scale.setScalar(0.055 + Math.sin(t + i) * 0.018);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} metalness={0.6} roughness={0.15} />
    </instancedMesh>
  );
}

/* ── Orbiting node ── */
function OrbitNode({ angle, radius, speed, yPos, color, scale = 0.2 }: {
  angle: number; radius: number; speed: number; yPos: number; color: string; scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const a = angle + t * speed;
    mesh.current.position.set(Math.cos(a) * radius, yPos + Math.sin(t * 0.4) * 0.3, Math.sin(a) * radius);
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.015;
  });
  return (
    <Float speed={1.5} floatIntensity={0.4}>
      <mesh ref={mesh} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} metalness={0.9} roughness={0.05} transparent opacity={0.9} />
      </mesh>
    </Float>
  );
}

/* ── Core distorted sphere ── */
function CoreSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.18;
  });
  return (
    <mesh ref={mesh} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#B87800"
        emissive="#FFB800"
        emissiveIntensity={0.35}
        metalness={1}
        roughness={0.05}
        distort={0.3}
        speed={1.5}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

/* ── Wireframe globe ── */
function WireGlobe() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.025;
  });
  return (
    <mesh ref={mesh} scale={2.9}>
      <sphereGeometry args={[1, 18, 18]} />
      <meshBasicMaterial color="#FFB800" wireframe transparent opacity={0.06} />
    </mesh>
  );
}

/* ── Connection lines ── */
function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => {
    const pts: number[] = [];
    const nodes = 22;
    const positions: [number, number, number][] = Array.from({ length: nodes }, (_, i) => {
      const phi = Math.acos(-1 + (2 * i) / nodes);
      const theta = Math.sqrt(nodes * Math.PI) * phi;
      const r = 3.5;
      return [r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)];
    });
    for (let i = 0; i < nodes; i++) {
      for (let j = i + 1; j < nodes; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 2.8) pts.push(...positions[i], ...positions[j]);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return geo;
  }, []);
  useFrame((state) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.y = state.clock.elapsedTime * 0.07;
    lineRef.current.rotation.x = state.clock.elapsedTime * 0.035;
  });
  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#FFB800" transparent opacity={0.2} />
    </lineSegments>
  );
}

/* ── Icosahedron wireframe ── */
function IcoFrame() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.07;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.04;
  });
  return (
    <mesh ref={mesh} scale={3.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#FFD04F" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

/* ── Glow torus ring ── */
function GlowTorus({ rotation, color, scale }: { rotation: [number, number, number]; color: string; scale: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (mesh.current) mesh.current.rotation.z = state.clock.elapsedTime * 0.18; });
  return (
    <mesh ref={mesh} rotation={rotation} scale={scale}>
      <torusGeometry args={[1, 0.016, 8, 80]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} metalness={1} roughness={0} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 52 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <pointLight position={[0, 0, 0]}   intensity={3}   color="#FFB800" distance={15} />
        <pointLight position={[-6, 4, 2]}  intensity={1.5} color="#FFD04F" distance={20} />
        <pointLight position={[6, -4, 2]}  intensity={0.8} color="#fff"    distance={20} />
        <spotLight  position={[0, 8, 4]}   intensity={0.8} color="#FFB800" angle={0.4} penumbra={1} />

        {/* Stars */}
        <Stars radius={80} depth={60} count={1200} factor={3} saturation={0.2} fade speed={0.4} />

        {/* Core */}
        <CoreSphere />
        <WireGlobe />
        <IcoFrame />
        <ConnectionLines />

        {/* Torus rings */}
        <GlowTorus rotation={[Math.PI / 2, 0, 0]}            color="#FFB800" scale={3.2} />
        <GlowTorus rotation={[Math.PI / 4, 0, Math.PI / 6]}  color="#FFD04F" scale={2.7} />
        <GlowTorus rotation={[0, Math.PI / 3, Math.PI / 4]}  color="#E09400" scale={3.7} />

        {/* Particle rings */}
        <ParticleRing count={80}  radius={3.8} color="#FFB800" />
        <ParticleRing count={55}  radius={4.9} color="#FFD04F" />

        {/* Orbiting nodes */}
        <OrbitNode angle={0}              radius={2.2} speed={0.33} yPos={0}    color="#FFB800" scale={0.22} />
        <OrbitNode angle={Math.PI * 0.66} radius={2.2} speed={0.33} yPos={0.8}  color="#FFD04F" scale={0.18} />
        <OrbitNode angle={Math.PI * 1.33} radius={2.2} speed={0.33} yPos={-0.8} color="#E09400" scale={0.2}  />
        <OrbitNode angle={0.5}            radius={4.6} speed={0.16} yPos={1.5}  color="#FFB800" scale={0.13} />
        <OrbitNode angle={2.5}            radius={4.6} speed={0.16} yPos={-1.5} color="#FFD04F" scale={0.12} />
        <OrbitNode angle={4.5}            radius={4.6} speed={0.16} yPos={0.5}  color="#fff"    scale={0.1}  />

        {/* Sparkles */}
        <Sparkles count={60} scale={14} size={1.5} speed={0.3} color="#FFB800" opacity={0.5} />
        <Sparkles count={30} scale={10} size={1.0} speed={0.2} color="#ffffff"  opacity={0.3} />
      </Suspense>
    </Canvas>
  );
}
