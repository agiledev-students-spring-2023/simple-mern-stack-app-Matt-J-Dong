import { Link } from 'react-router-dom'
import './AboutUs.css'
import test from './Zoom Image.jpg'
import axios from 'axios'
import {useState} from 'react'
/**
 * A React component that represents the AboutUs page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
//let x = 'lol'
//let image = ''
const AboutUs = props => {
  let [title, setTitle] = useState('')
  let [text, setText] = useState('')
  let [image, setImage] = useState('')
  let [alt, setAlt] = useState('')
  console.log(test)
  axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
      .then((response) => {
        title = response.data.title
        text = response.data.text
        image = response.data.image
        alt = response.data.alt
        setTitle(title)
        setText(text)
        setImage(image)
        setAlt(alt)
    })
      .catch(() => {return 'error'}
      )
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <div><p><img style={{width: "20%", height: "20%"}} src={`${image}`} alt={`${alt}`}/></p></div>
      <p><Link to="/sus">.</Link></p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
