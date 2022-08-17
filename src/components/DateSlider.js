
const DateSlider = ({ date, dates, onChange }) => {

  return (
    <div className="components__dateslider">
        <input type="range" min="0" max={(dates.length - 1).toString()} onChange={(event) => onChange(dates[event.target.value])}></input>
        <h2>{date}</h2>
    </div>
  )
}

export default DateSlider