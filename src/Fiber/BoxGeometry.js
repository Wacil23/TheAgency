import { useFrame } from '@react-three/fiber'

import React from 'react'
import { useRef } from 'react'

const BoxGeometry = () => {
    const geometry = useRef()

    useFrame((state, delta) => {
        geometry.current.rotation.y += delta * 0.5
    })
    return (
        <>
            <mesh ref={geometry}>
                <boxGeometry  />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default BoxGeometry