import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StarWarsPeoplePage = (props) => {
    const [form, setForm] = useState("")
    const [isValid, setIsValid] = useState(true)

    useEffect(()=>{
        axios
            .get(`https://swapi.dev/api/people/${props.obj}`)
            .then(response=>{
                setIsValid(true)
                setForm(response.data);
                console.log(response.data)
            })
            .catch(err=>{
                setIsValid(false)
                alert("Not the droids you\'re looking for!")
                console.log(err)
            })
    },[props.obj])


    return (
        <div className="displayPage" >
            {!isValid && <img style={{height: "300px", width: "300px"}} src="https://www.hasbro.com/common/productimages/en_US/5CB8481CFF6C41098667592C51DDEF4C/2f6bcbf7080ae8229ac242ba6496b1148c9b9667.jpg" alt="obi Wan" />}
            <h2>Person Name: {form.name}</h2>
            <h4>Height: {form.height}</h4>
            <h4>Mass: {form.mass}</h4>
            <h4>Hair Color: {form.hair_color}</h4>
        </div>
    )
}

export default StarWarsPeoplePage;