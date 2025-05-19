import React, { useState } from 'react';
// import '../components/App.css'
import '../App.css'



const Navbar = (props)=>{


    const [count ,setCount] = useState(0);

    const handleCount = ()=>{
   setCount( count + 1);
    }

 

    return(
<>

<div className="container">
    <div className="row">
        <h2 className='bg-dark text-white'>this is navbar</h2>
        <p>Count is {count}</p>
        <button className='btn btn-danger' onClick={handleCount}>Counts </button>
    </div>
</div>

</>
    )

}


export default Navbar;
