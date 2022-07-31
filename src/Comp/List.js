import React from 'react'
import data from './List-data.json'

export default function List(props) {
    const filterdata = data.filter((e1) => {
        if (props.input === "") {
            return e1;
        }
        else {
            return e1.Text.toLowerCase().includes(props.input);
        }
    })
    return (
        <div>
            <ol>
            {filterdata.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
            </ol>
        </div>
    )
}
