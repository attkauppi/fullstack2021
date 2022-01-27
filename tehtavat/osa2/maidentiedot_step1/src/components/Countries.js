import React from 'react'
import Country from './Country'
import CountrySingle from './CountrySingle'

const Countries = ({ countries }) => {

    console.log("Countries countries.js-luokasta: ")
    console.log(countries)
    console.log("----")

    console.log("EKA: ")
    console.log(countries[0])

    //if (!Array.isArray(countries[0]) || countries.length) {
    // if (countries.length > 10) {
    //     return (
    //         <div>
    //             Too many matches, specify another filter
    //         </div>

    //     )
    // }
        
    if (countries[0] == undefined || countries[0].length == 0 || countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    
    if (countries.length > 1 && countries.length <= 10) {
        console.log("Hakutuloksia?")
        console.log(countries)
        return (
            <div>
                {countries.map(country =>
                    <Country key={country.name.common} country={country} />    
                )}
            </div>
        )
        // console.log("Löydetyt countries.js:sta")
        // console.log(countries)
        // return (
        //     <ul>
        //         {countries.map(country =>
        //             // <li> {country.common.name} </li>
        //             <Country key={country.name.common} country={country} />
        //         )}
        //     </ul>
        // )
    }

    if (countries.length === 1) {
            return (
                <div>
                    {countries.map(country =>
                        <CountrySingle key={country.name.common} country={country} />
                    )}
                </div>
            )
        }

   

    // if (countries.length > 10) {
    //     return (
    //         <div>
    //             Too many matches, specify another filter
    //         </div>

    //     )
    // }

    // if (countries.length > 1 && countries.length <= 10) {
    //     console.log("Countries tokasta iffista:")
    //     console.log(countries)
    //     return (
    //         <ul>
    //             {countries.map(country =>
    //                 // <li> {country.common.name} </li>
    //                 <Country key={country.name.common} country={country} />
    //             )}
    //         </ul>
    //     )
    // }
    // console.log("Countries.length: ", countries.length)
    // if (countries.length === 1) {
    //     return (
    //         <div>
    //             {countries.map(country =>
    //                 <Country key={country.name.common} country={country} />    
    //             )}
    //         </div>
    //     )
    // }
    
}

export default Countries