/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Camera from '../models/Camera'
import { Loader } from '../components'

const Banner = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustCameraForScreenSize = () => {
        let screenScale = [1, 1, 1], screenPosition = [0, 0, 0], rotation = [0, 0, 0];
        screenScale = (window.innerWidth < 768) ? [0.116, 0.132, 0.126] : [0.170, 0.177, 0.180];
        return [screenScale, screenPosition, rotation];
    }

    const [cameraScale, cameraPosition, cameraRotation] = adjustCameraForScreenSize();

    return (
        <div className='w-full sm:w-2/3 h-2/3 sm:h-screen flex justify-center'>
            <Canvas
                className={`w-full h-1/2 sm:h-screen sm:p-10 pl-4 sm:pl-16 bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                shadows
                camera={{ near: 0.1, far: 1500, position: [-16, -5, 27] }}>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[5, 5, 5]} intensity={4} castShadow />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.3}
                        penumbra={1}
                        intensity={1.3}
                        castShadow
                    />
                    <Camera
                        position={cameraPosition}
                        scale={cameraScale}
                        rotation={cameraRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={5}
                        maxDistance={20}
                        onStart={() => setIsRotating(true)}
                        onEnd={() => setIsRotating(false)}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Banner
