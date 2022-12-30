import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const Contact = ({ ...props }) => {

    const phone = useRef()
    const [hovered, setHovered] = useState(false)
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    const { nodes, materials } = useSpline('https://prod.spline.design/heKOX9oT7ogQTX96/scene.splinecode')

    return (
        <>
        <OrbitControls enabled />
        <color attach="background" args={["#5e6063"]} />
      <group {...props} dispose={null}>
        <pointLight
          name="Point Light"
          castShadow
          intensity={1}
          distance={2000}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          position={[340.73, 24.6, 244.04]}
        />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[9.83, -61.85, 28.67]}
          rotation={[-0.01, -0.07, 0]}
        />
        <mesh
          name="Ellipse"
          geometry={nodes.Ellipse.geometry}
          material={materials["Ellipse Material"]}
          castShadow
          receiveShadow
          position={[32.1, -14, 0]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[262.24, -91.81, 300]}
        />
        <PerspectiveCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[44.46, -24.54, 994.16]}
          rotation={[0.04, 0.1, 0]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
        </>
    )
}

export default Contact