import { useState } from 'react';
import {cartoonList} from './data';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index + 1);
    }
    function handleClickBack() {
        setIndex(index - 1);
    }
    let cartoon = cartoonList[index];
    return(
         <>
         <button onClick={handleClick}
         disabled={index === cartoonList.length -1}>
            Next
         </button>
         <h2>
            <i>{cartoon.name} </i> by {cartoon.alt}
         </h2>
         <h3>
            ({index + 1} of {cartoonList.length})
         </h3>
         <img
         src={cartoon.url}
         alt={cartoon.alt}
         />
         <p>
            {cartoon.description}
         </p>
         <button onClick={handleClickBack} disabled ={index === 0}>
            Back
          </button>
         </>
    );
}

