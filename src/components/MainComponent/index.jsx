import React from 'react';
import FormSearch from '../FormSearch';
import Header from '../Header';
import ProductSpace from '../ProductSpace';
import { useState } from 'react';
const MainComponent = () => {
    const [count, setCount]= useState(0); 
    return (  
        <div className="App">
            <Header/>
            <FormSearch setCount={setCount}/>
            <ProductSpace count={count} />
        </div>
    );
}
 
export default MainComponent;