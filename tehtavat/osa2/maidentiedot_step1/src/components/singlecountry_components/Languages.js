import React from 'react'

const Language = ({ language }) => {

    console.log("language: ", language)
    console.log(language)
    return (
        <div>
            {language.name.common}
        </div>

    )
}

export default Country