import React, { useState } from 'react';
import {navigate} from '@reach/router';
import './Navbar.css'

const Navbar = (props) => {
    const [starWarsInfo, setStarWarsInfo] = useState("planets");
    const [obj, setObj] = useState()
    const options = [
        {name: "people"},
        {name: "planets"}
    ]

    const onChangeResource = () => {
        navigate(`/${starWarsInfo}/${obj}`);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }

    return (

        <div>
            <form className="newNavbar" onSubmit={(event)=>onSubmitHandler(event)}>
                <div className="selectBox" className="newNavbar" >
                    <select className="form-select form-select-lg w-25 m-5" onChange={(event)=>setStarWarsInfo(event.target.value)}>
                    {
                        options.map((item, idx)=> {

                            return <option key={idx} value={item.name} >{item.name}</option>
                    })
                    }
                    </select>
                </div>
                <div className="entryBox" >
                    <input className="form-control m-2" type="text" placeholder="Search an ID" onChange={(event)=>setObj(event.target.value)} 
                    />
                </div>
                <div>
                    <input onClick={onChangeResource} type="submit" className="btn btn-info btn-lg mx-5" value="Search" 
                    />
                </div>
            </form>
        </div>

    )
}

export default Navbar;