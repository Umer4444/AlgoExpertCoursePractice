import React, { useState } from 'react';

const nonNumberRegex = /\D/g
const mask = "(###) ###-####"

function convertToPhoneNumber(input) {
    const numbers = input.replace(nonNumberRegex, '').slice(0, 10)

    const phoneNumbers = []
    let mi = 0
    for (let number of numbers) {
        while (mask[mi] !== '#') {
            phoneNumbers.push(mask[mi++])
        }

        phoneNumbers.push(number)
        mi++
    }

    return phoneNumbers.join("")
}

export default function PhoneInput() {
    const [number, setNumber] = useState("")
    const handleOnChange = (event) => {
        setNumber(convertToPhoneNumber(event.target.value))
    }

    return (
        <>
            <input
                type="tel"
                value={number}
                onChange={handleOnChange}
                placeholder="(555) 555-5555" />
            <button
                type="button"
                disabled={number.length < 14}
                onClick={() => setNumber('')}
            >Submit</button>
        </>
    )
}


