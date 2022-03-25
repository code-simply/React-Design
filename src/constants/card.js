import React, { useState } from 'react';

export const Card = (data) => {
    const [value, setvalue] = useState(data.data[0].value);

    return (
        <div className="card__menu">
            <div className="card_title">{data.title}</div>
            <div className='card__content'>
                <div className='datavalue'>{value}</div>
                <ul>
                    {data.data.map((value) => (
                        data.data.length == 1 ? " " : <li className="index"><button className='card_btn' type='button' onClick={() => setvalue(value.value)}>{value.index}</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}