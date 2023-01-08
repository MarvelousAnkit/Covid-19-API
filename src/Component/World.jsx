import React from 'react'
import { useEffect, useState } from "react";
import './world.css'



function World() {
  const [data, setdata] = useState([])
  const getData = async() => {
    await fetch('https://disease.sh/v3/covid-19/countries')
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
      console.log(data)
      setdata(data)
    })
  }
  useEffect(() => {
    getData()
    
  }, [])
  
  return (<>
    <div className="heading">
      <h1 className='h11'>World Wide Data</h1>
    </div>
    <div className='container-fluid con'>
      
    <table className='tableFixHead'>
    <thead>
      <tr height="50px">
        <th>Country</th>
        <th>Cases</th>
        <th>Recovered</th>
        <th>Death</th>
        <th>Active</th>
        <th>Critical</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((value)=>{
          return(
            <tr height="50px">
        <td data-label="Country">{value.country}</td>
        <td data-label="Cases">{value.cases}</td>
        <td data-label="Recover">{value.recovered}</td>
        <td data-label="Deaths">{value.deaths}</td>
        <td data-label="Active">{value.active}</td>
        <td data-label="Critical">{value.critical}</td>
      </tr>
          )
        })
      }
      
    </tbody>
    </table>
    </div>
    </>
  )
}

export default World