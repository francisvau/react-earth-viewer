
import { useState } from "react"

const DateSlider = ({ dates }) => {

    const [date, setDate] = useState('')

    const onChange = (value) => {
        setDate(dates[value])
    }

  return (
    <div className="imageviewer__dateslider">
        <input type="range" min="0" max={(dates.length - 1).toString()} onChange={(event) => onChange(event.target.value)}></input>
        <h2>{date}</h2>
    </div>
  )
}

export default DateSlider