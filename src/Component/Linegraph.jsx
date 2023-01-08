import React , {Component, useState, useEffect} from 'react';


import Chart from 'react-apexcharts'
import { BorderColor, Category } from '@material-ui/icons';
const  App =()=> {
  
  
   const [series, setSeries] = useState([{
    name: 'series-1',
    data: []
 }])
  const [options, setObject] = useState({
    chart: {
      id: 'apexchart-example'
    },
     xaxis: {
       categories: [],
       
       
     },

     
  })

  useEffect(() => {
    
      const date = []
      const death = []
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=7')
    .then(response => response.json())
    .then(data => {
      // We are fetching The Data but it is returning an object with Key & Value Pair
      let a = data.cases
      
      let b = (Object.keys(a)); //b will take key 
      let c = (Object.values(a)) // c will take values
       b.map((value)=>{
        
        date.push(value)
          //After Using Map Function We will get our data Column Wise
      })
      c.map((values)=> {
      
        death.push(values) //This will push the value to array of death
        
      })
       //Now we are sending this Data to options with the help of objects
      setObject({
        chart: {
          id: 'apexchart-example'
        },
         xaxis: {
           categories: date, // x axis will store date data
           borderColor:'red'
         }
        
      })
       //Now we are sending this Data to Series with the help of Setseries

      setSeries([{
           name: 'series-1',
           data: death // y axis will store death
        }])
      
      
    })
  

  }, [])
  
  
 
  
  return (<>
  <Chart options={options}  series={series} type="line" width={390} height={240}/>
  
  </>
  )
}
// Dont Change Any Format.

export default App;
