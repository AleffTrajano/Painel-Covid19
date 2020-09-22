import React,{ memo, useCallback, useEffect, useState } from 'react'
import Api from '../../api'
function Main(){
    const [data, setData] = useState({})
    const [country, setCountry]= useState('brasil')   
    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data =>console.log(data))
    },[])
    useEffect(()=>{
        getCovidData(country)
    }, [getCovidData, country])
    

    return(
        <div>
            Teste
        </div>
    )
}
export default memo(Main)