import { useEffect, useState } from "react";

const useCetagory = () =>{
    const [cetagory, setCeatgory] = useState([])
    const [loading, setLoading]= useState(false)
    useEffect(( () =>{
        fetch('../../../public/grocary_product.json')
        .then(res => res.json())
        .then(data => {
            setCeatgory(data)
            setLoading(true)
        })
    }),[])

    return [cetagory,loading]
}

export default useCetagory;