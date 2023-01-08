import React from 'react'
import { useEffect, useState } from "react";
import '../Component/india.css'




function India() {
  const [data, setdata] = useState([])
  console.log(data,"hi")


    const getData = async () => {
      
       const a =  await fetch ('https://data.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
          setdata(data.statewise)
        })

    }

    useEffect(() => {
     getData()
    }, [])
    
  return (
    <>
    
    <div className="container-fluid mt-5">
    <div className="main-heading">
      <h1 className="mb5 headings" text-center> <span className="font-weight-bold">India </span> Covid 19 Dashboard</h1>

    </div>
    <div className="container">
    <table className='tableFixHead'>
      <thead className='thead-dark'>
        <tr height="50px">
          <th >State</th>
          <th >Confirmed</th>
          <th >Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>Updated</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((value)=> {
            return(
              <tr height="50px">
                <td data-label="State" >{value.state}</td>
                <td data-label="Confirm">{value.confirmed}</td>
                <td data-label="Recover">{value.recovered}</td>
                <td data-label="Death" className='death' >{value.deaths}</td>
                <td data-label="Active" >{value.active}</td>
                <td data-label="Updated">{value.lastupdatedtime}</td>
              </tr>
              
              
            )
          })
        }
        
      </tbody>
    </table>
    </div>
    </div>
    
    </>

  )
}

export default India