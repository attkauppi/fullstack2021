import React from 'react'

const CountrySingle = ({ country }) => {

    console.log("CountryList: ", country)
    console.log(country)
    return (
        <div>
            <h1>{country.name.common}</h1>

            <div>capital {country.capital[0]}</div>
            <div>population {country.population}</div>

            <h2>languages</h2>
            <ul>
                {Object.keys(country.languages).map(key => {
                    return <li key={key}>{country.languages[key]}</li> 
            })}

            </ul>
            <br></br>
            <div>
                <img src={country.flags.png}/>
            </div>
        </div>

    )
}

export default CountrySingle