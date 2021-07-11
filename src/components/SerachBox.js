import React, { useState } from 'react'

export const SerachBox = ({onSearch}) => {

    const [value,setValue] = useState ("")
    return (
        <div>
            <input value={value} onChange={(e) => {setValue(e.target.value)}} />
            <button onClick={() => {onSearch(value)}}>Search</button>
        </div>
    )
}
