import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import styled from "styled-components";
import Navbar from './components/Navbar';
import Info from './components/Info'
import React from 'react'
import Blob from './blob/Blob';
import Blob2 from './blob/Blob2';
import Blob3 from './blob/Blob3';
import Blob4 from './blob/Blob4';
import Bgparticle from './components/Bgparticle';
import Bgparticle2 from './components/Bgparticle2';
import Bgparticle3 from './components/Bgparticle3';
import Image from './images/shuttle.png'







// import Blob from './blob/Blob.js';

function App() {


  return (
  
    // <div className="container"> 
    //   <Canvas camera={{position: [0.0, 0.0, 8.0] }}>
    //     <mesh ref={mesh} scale= {1.5} position={[0,0,0]}>
    //      <icosahedronGeometry argd={[2, 20]} />
    //      <meshStandardMaterial/>
    //     </mesh>
    //   </Canvas>      
    // </div>

    
    <div className='cont'>
    <div className='mynavbar'> <Navbar/></div>

    <div className='particles'>
    <Bgparticle3/>  
    {/* <Bgparticle2/> */}
    <div className='image'>
    <img src={Image}/>
    </div>
    
   
    </div>

   

    <div className='main'>
    <Wrapper>
       <Canvas camera={{position: [0.0, 0.0, 8.0]}}>
            <ambientLight intesity = {0.2}/>
            <directionalLight color="black" />
            <Blob/>
            <Blob2/>
            <Blob3/>
            <Blob4/>
         </Canvas>
   </Wrapper>
   <div className='info'>
    <Info/>
   </div>
   
   </div>

  
  
   

  </div>



  );
}



 const Wrapper = styled.div`
  position: relative;
  bottom: 0;

  Canvas {
    height: 100vh;
    //  background-image: linear-gradient(30deg, rgb(226, 251, 115), rgb(149, 218, 246), green);
    background-color: rgb(37, 37, 37);
    
  }
`;


export default App;

