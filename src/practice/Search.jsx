import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TbSettingsSearch } from 'react-icons/tb';

export default function Search() {
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("");

    // get all datas
    const handleget = async () => {
        let datas = await axios.get("http://localhost:3000/products");
        setdata(datas.data);
    };


    useEffect(() => {
        handleget();
    }, [])

    

    const handlesearch = (e) => {
        setsearch(e.target.value);
    }
      let filt = data.filter((oo) => oo.product.toLowerCase().includes(search.toLowerCase()));

    return ( 
        <div>
            <label htmlFor="sea"></label>
            <input type="text" id='sea' placeholder='search.............' onChange={handlesearch} />


            <div>
                {filt.map((dt) => (
                    <div>
                        <h1>product : {dt.product}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
