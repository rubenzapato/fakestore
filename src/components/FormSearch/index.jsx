import React, { useState } from 'react';
import useApi from '../../hooks/useApi';

const FormSearch = ({setCount}) => {
    const [number, setNumber] = useState(0)
    const  handleSubmit = (e) => {
        e.preventDefault()
        console.log(number)
        setCount(number)
    }
    return ( 
        <div className="section_form">
            <h2>Product Store</h2>
            <form onSubmit={handleSubmit}>
                <input className="place" type='number' placeholder='Number of products' onChange={e=>setNumber(e.target.value) }/>
                <input type='submit' value="Search" className='btn_submit'/>
            </form>
        </div>
     );
}
 
export default FormSearch;