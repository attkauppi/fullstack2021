import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filterCountry, setFilterCountry ] = useState('')
  const [ countriesFound, setCountriesFound ] = useState([countries])

  const countriesToShow = (query) => {
    console.log(query)
    console.log("Countries")
    console.log(countries)
    return countries.filter(
      el => el.name.common.toString().toLowerCase().indexOf(
        query.toString().toLowerCase()) !== -1
    )
  }

  // const addCountry = (response) => {
  //   const countryObject = {
      
  //   }
  // }


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
        //setCountriesFound(countries)
      })
  }
  useEffect(hook, [])

  const handleCountryFilterChange = (event) => {
    setFilterCountry(event.target.value)
    console.log(event.target.value)
    setCountriesFound(countriesToShow(event.target.value))
    console.log("countriesFound nyt:")
    console.log({countriesFound})
  }


  return (
    <div>
      <div>
        Filter countries shown with <input
          value={filterCountry}
          onChange={handleCountryFilterChange}
        />
      </div>
      
        <Countries countries={countriesFound} />

    </div>
  );
}

export default App;
