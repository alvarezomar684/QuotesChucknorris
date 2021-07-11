import React from 'react'

export const ChuckQuotes = ({text, date, icon}) => {
    return (
        <div>
            {text} - {date} - <img src={icon} alt="chuck norris icon" />
        </div>
    )
}
