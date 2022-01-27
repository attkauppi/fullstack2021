import React from 'react'

const Country = ({ country }) => {

    console.log("Country: ", country)
    console.log(country)
    return (
        
        <li>
            {country.name.common}
        </li>

    )
}

export default Country