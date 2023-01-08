import React from 'react'
import './Tables.css'
import numeral from 'numeral'

function Tables(props) {
  return (
    <div className='tablees'>
        {props.countries.map(({country,cases}) =>(
            <tr>
                <td>{country}</td>
                <td><strong>{numeral(cases).format("0.0a")}</strong></td>
            </tr>
        ))}
    </div>
  )
}

export default Tables