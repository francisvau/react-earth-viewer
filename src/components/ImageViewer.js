import { useState, useEffect } from "react"
import DateSlider from "./DateSlider"
import GenerateButton from "./GenerateButton"
import Loading from "./Loading"
import Image from "./Image"

const ImageViewer = () => {

  const [dates, setDates] = useState([])
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
        const res = await fetch('https://epic.gsfc.nasa.gov/api/natural/all')
        const data = await res.json()
        setDates(data.map(e => e["date"]).reverse())
        setDate(data[0]["date"])
    }
    fetchEvents()
  }, [])

  const getImage = () => {
    const fetchEvents = async () => {
      const res = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`)
      const data = await res.json()
      setImage(data[0]["image"])
    }
    fetchEvents()
  }

  const moveDate = (newDate) => {
    setImage('')
    setDate(newDate)
  }

  return (
    <div className="app__imageviewer">
      {dates.length
        ? <div className="imageviewer__components">
            <DateSlider date={date} dates={dates} onChange={moveDate}/>
            <GenerateButton onClick={getImage}/>
            <Image image={image} date={date}/>
          </div>
        : <Loading />
      }
    </div>
  )
}

export default ImageViewer