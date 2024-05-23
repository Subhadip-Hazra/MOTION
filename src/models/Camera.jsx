/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import CameraImg from '../assets/3d/camera_zorki_-_4.glb'

const Camera = ({ position, scale, rotation, setIsRotating, ...props }) => {
    const { scene } = useGLTF(CameraImg);
    const ref = useRef();

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <mesh
            ref={ref}
            position={position}
            scale={scale}
            rotation={rotation}
            {...props}
            onPointerDown={(e) => setIsRotating(true)}
            onPointerUp={(e) => setIsRotating(false)}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Camera
