import { Link } from 'react-router-dom'
import './AboutUs.css'
//import image from './Zoom Image.jpg'
import axios from 'axios'
/**
 * A React component that represents the AboutUs page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = response => {
  axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
      .then(() => {return (
        <>
          <h1>{response.data.title}</h1>
          <p>{response.data.text}</p>
    <div><p><img style={{width: "20%", height: "20%"}} src={response.data.image} alt="It's me! " /></p></div>
    <p>Here's a little easter egg: <Link to="/sus">Click me!</Link>.</p>
        </>
      )})
      .catch(() => {return 'error'})
}

// make this component available to be imported into any other file
export default AboutUs
