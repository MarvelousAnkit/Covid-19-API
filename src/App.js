import React from "react";
import {Card, CardContent, FormControl , MenuItem, Select} from '@material-ui/core'
import "./App.css"
import { useEffect, useState } from "react";
import Infobox from "./Component/Infobox";
import Maps from './Component/Maps'
import Tables from './Component/Tables'
import  {sortData, prettyPrintStat} from "./Component/sort"
import Linegraph from "./Component/Linegraph";
import 'leaflet/dist/leaflet.css'
import Navbar from "./Component/Navbar";
import Footers from "./Component/Footers"
import India from "./Component/India.jsx"
import World from "./Component/World";
import numeral from "numeral";



function App() {
  const [countries, setcountries] = useState([])
  const [country,setcountry] = useState('worldwide')
  const [countryInfo , setcountryInfo] = useState({})
  const [Table , setTable] =useState([])
  const [mapCenter, setmapCenter] = useState({  lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries , setmapCountries] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => {
       const countries =  data.map(items => (
          {
            name : items.country,
            value: items.countryInfo.iso2
          }
        ))
          const sortedData = sortData(data) 
          setTable(sortedData)

        setcountries(countries)
        setmapCountries(data)
      })
    }
    getData()
  }, [])

  useEffect(() => {
  fetch('https://disease.sh/v3/covid-19/all')
  .then(response => response.json())
  .then (data => setcountryInfo(data))
  }, [])
  

  const onCountrychange =  (e) => {
    
     const url = e.target.value === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${e.target.value}`


     

      fetch(url)
     .then(response => response.json())
     .then(data => {
      setcountry(e.target.value)
      setcountryInfo(data)
      setmapCenter([data.countryInfo.lat, data.countryInfo.long])      
      
      setMapZoom(6)
      
      
     })

    setcountry(e.target.value)
  }
  
  return (
    <>
    <Navbar/>
    <div className="app">
     <div className="app__left">

     <div className="app_header">
      <h1> </h1>
      <FormControl className="app__dropdown">
            <Select variant="outlined" value={country} onChange={onCountrychange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>)}
            </Select>
          </FormControl>
      
      </div>
      <div className="app__stats">
        <Infobox title="Coronavirus Today Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={numeral(countryInfo.cases).format("0.0a")} />
        <Infobox title="Recovered Today" cases={prettyPrintStat(countryInfo.todayRecovered) } total={numeral(countryInfo.recovered).format("0.0a")} />
        <Infobox title="Deaths Today" cases={prettyPrintStat(countryInfo.todayDeaths)}  total={numeral(countryInfo.deaths).format("0.0a")} />
      </div>
      <Maps zoom={mapZoom} center={mapCenter} countries={mapCountries} />
      
      
      


      
     </div>
     
     <Card className="app__right">
    <CardContent>
      <h3>Live Cases By Country</h3>
      <Tables countries={Table} />
      
       
      <h3>World Wide New Cases</h3>
      <Linegraph/>
    </CardContent> 
    

    </Card>
    
    </div>
    
    {/* <India /> */}
    {/* <World /> */}
    <Footers/>
    

    </>
  )
}

export default App;
