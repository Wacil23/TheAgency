import React, { useRef } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { OrthographicCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { extend } from '@react-three/fiber'


const EmbededStepp = ({ ...props }) => {
    const { nodes, materials } = useSpline('https://prod.spline.design/gYlVWNm9dPgXp93T/scene.splinecode')
    const stepper = useRef()
    const stepper2 = useRef()
    useFrame((state, delta) => {
        stepper.current.rotation.y += delta * Math.cos() * 0.2
        stepper2.current.rotation.y += delta * Math.cos() * 0.2

    })
    return (
        <>
            <OrbitControls makeDefault />
            <group  {...props} dispose={null}>
                <group >

                    <mesh
                        ref={stepper}
                        name="Rectangle"
                        geometry={nodes.Rectangle.geometry}
                        material={materials['Rectangle Material']}
                        castShadow
                        receiveShadow
                        position={[74.76, -35.86, -691.73]}
                        rotation={[-0.02, 0, 0]}
                        scale={[0.16, 0.16, 0.87]}
                    />
                    <mesh
                        ref={stepper2}
                        name="Cube"
                        geometry={nodes.Cube.geometry}
                        material={nodes.Cube.material}
                        castShadow
                        receiveShadow
                        position={[104.68, 68.02, -511.6]}
                        scale={0.16}
                    />
                </group>
                <directionalLight
                    name="Directional Light"
                    castShadow
                    intensity={0.91}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={-10000}
                    shadow-camera-far={100000}
                    shadow-camera-left={-481.541}
                    shadow-camera-right={481.541}
                    shadow-camera-top={481.541}
                    shadow-camera-bottom={-481.541}
                    position={[-1122.88, 745.16, 7071.92]}
                    rotation={[0, 0.05, 0]}
                />
                <OrthographicCamera
                    name="1"
                    makeDefault={true}
                    zoom={0.9}
                    far={100000}
                    near={-100000}
                    position={[-211.42, -55.37, 994.11]}
                    rotation={[-0.01, -0.1, 0]}
                    scale={3}
                />
                <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
            </group>
        </>
    )
}

export default EmbededStepp