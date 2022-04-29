// React = Default import
// {useState, useEffect} = names Import
import React, {useState, useEffect} from 'react';

const Car = () => {
    console.log("Car Component Has Rendered!")

    const initDataForCar = {brand: "Brand", model:"Model", color: "Color"};

     const [car, setCar]= useState(initDataForCar);
     

     useEffect(
         () => {
             console.log("useEffect has been executed!")
             setCar({brand: "Volvo", model:"V60", color: "Red"});
         },[]
     );

     const HandleClick = () => {
         console.log("Click Event Have been triggerd!")
        setCar({brand: "BMW", model:"E30", color: "Black"})
        console.log(car)
     }

    return (
        <div>
            <b>{car.brand} - {car.model} - {car.color}</b>
            <button onClick={HandleClick} >Update Car</button>
        </div>
    );
};

export default Car;