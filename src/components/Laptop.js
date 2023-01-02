import React from 'react'
import {
    Center,
    ContactShadows,
    Environment,
    Float,
    Html,
    PresentationControls,
    useGLTF,
    useScroll,

} from '@react-three/drei';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useFrame, useThree } from '@react-three/fiber';
import useRefs from 'react-use-refs'
import * as THREE from 'three'
import { Camera } from 'three';


const Laptop = (props) => {
    const scroll = useScroll();
    const { width, height } = useThree((state) => state.viewport)
    const [group, mac, site] = useRefs()
    gsap.registerPlugin(ScrollTrigger);
    const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)


    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    useFrame((state, delta) => {
        const r1 = scroll.range(0 / 4, 1 / 4)
        const r2 = scroll.range(2 / 4, 2 / 4)
        const r3 = scroll.visible(4 / 5, 1 / 5)
        mac.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 / 12
        group.current.scale.x = group.current.scale.y  = group.current.scale.z = THREE.MathUtils.damp(group.current.scale.z, 1 + 4 * (0.1 + rsqw(r2)), 4, delta);
        group.current.position.y = THREE.MathUtils.damp(group.current.position.y, 1 - 0.09 * (11 + rsqw(r1)), 4, delta);
        group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 2 - 0.3 * (6.5 + rsqw(r2)), 4, delta)
        site.current.classList.toggle("show", r2)
    })

    return (

        <>
            <Environment preset='city' />
            <PresentationControls
                polar={[-0.2, 0.03]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
            >

                <group ref={group} {...props} dispose={null}>
                    <group position={[0, -height / 12 , 0,]} scale={width / 180} >


                        <mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} />
                        <mesh geometry={nodes.Circle001_1.geometry} material={nodes.Circle001_1.material} />
                        <mesh geometry={nodes.Circle001_2.geometry} material={materials.HeadPhoneHole} />
                        <mesh geometry={nodes.Circle001_3.geometry} material={nodes.Circle001_3.material} />
                        <mesh geometry={nodes.Circle001_4.geometry} material={nodes.Circle001_4.material} />
                        <mesh geometry={nodes.Circle001_5.geometry} material={materials.TouchbarBorder} />
                        <mesh geometry={nodes.Circle001_6.geometry} material={materials.Keyboard} />
                        <mesh geometry={nodes.KeyboardKeyHole.geometry} material={nodes.KeyboardKeyHole.material} position={[-11.79, -0.15, -8.3,]} scale={5.8} />
                        <mesh geometry={nodes.RubberFoot.geometry} material={materials.DarkRubber} position={[-11.95, -0.75, 7.86,]} scale={5.8} />
                        <group position={[0.01, -0.21, -10.56,]} scale={5.8} >
                            <mesh geometry={nodes.Circle012.geometry} material={materials.HingeBlack} />
                            <mesh geometry={nodes.Circle012_1.geometry} material={materials.HingeMetal} />
                        </group>
                        <group position={[0, -0.51, 0,]} scale={5.8} >
                            <mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
                            <mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
                        </group>
                        <group position={[-11.79, -0.15, -8.3,]} scale={5.8} >
                            <mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
                            <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
                            <mesh geometry={nodes.Circle_2.geometry} material={materials.Touchbar} />
                        </group>
                        <group ref={mac} position={[0.01, -0.47, -10.41,]} scale={[5.8, 7 ,5.71 ]} >
                            <mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} />
                            <mesh geometry={nodes.Circle002_1.geometry} material={materials.Screen} />
                            <mesh geometry={nodes.Circle002_2.geometry} material={materials.ScreenGlass} />
                            <mesh geometry={nodes.Circle002_3.geometry} material={materials.Rubber} />
                            <mesh geometry={nodes.Circle002_4.geometry} material={materials.DisplayGlass} />
                            <mesh geometry={nodes.AppleLogo000.geometry} material={materials['AppleLogo.004']} position={[0, -0.11, -1.8,]} rotation={[-Math.PI, 0, -Math.PI,]} scale={[0.58, 0.58, 0.58,]} />
                        </group>
                        <group position={[12.2, 0.03, 0.6,]} scale={5.8} >
                            <mesh geometry={nodes.Circle003.geometry} material={nodes.Circle003.material} />
                            <mesh geometry={nodes.Circle003_1.geometry} material={nodes.Circle003_1.material} />
                        </group>
                        <group position={[-15.03, 0.03, 0.6,]} scale={5.8} >
                            <mesh geometry={nodes.Circle009.geometry} material={nodes.Circle009.material} />
                            <mesh geometry={nodes.Circle009_1.geometry} material={nodes.Circle009_1.material} />
                        </group>

                    </group>
                </group>
                    <Html ref={site} center  transform >
                       rtreter
                    </Html>
            </PresentationControls>
            <ContactShadows position-y={-height / 4} opacity={0.4} blur={2.4} scale={9} />
        </>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
export default Laptop