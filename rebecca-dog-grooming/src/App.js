import './App.css';

import{motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import images from './images';


function App(){
    
    const [width,setWidth] = useState(0);

    return(
        <div className='App'>
            <motion.div className='carousel'>
                <motion.div drag='x' dragConstraints={{ right:0 }} className='inner-carousel'>
                    {images.map ( image=> {
                        return(
                             <motion.div className='item'> 
                                <img src={image} alt='item' />
                             </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}



export default App;