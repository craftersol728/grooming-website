import './App.css';
import{motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import images from './images';


function App(){
   
    return(
        <div className='App'>
            <motion.div className='carousel'>
                <motion.div className='inner-carousel'>
                    {images.map ( image=> {
                        return(
                             <motion.div> 
                                <img src={image} alt='item' />
                             </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

<style>
    
</style>

export default App;