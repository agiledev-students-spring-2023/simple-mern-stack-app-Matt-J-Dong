import { Link } from 'react-router-dom'
import './AboutUs.css'
import image from './Zoom Image.jpg'
/**
 * A React component that represents the AboutUs page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>Hello! I'm Matthew Dong, a student at the NYU College of Arts and Science (CAS) pursuing a joint major in Computer Science and Data Science.</p>
<p>I believe that the people we interact and work with are the core of how society as a whole makes progress. By drawing from my experiences of working with people of a wide range of backgrounds, I hope to combine people and technology together in a way that can benefit everybody, no matter who they are.</p>
<p>Feel free to contact me at matthew.dong@nyu.edu or connect with me on LinkedIn. I'm looking forward to meeting all of you!</p>
<div><p><img style={{width: "20%", height: "20%"}} src={image} alt="It's me! " /></p></div>
<p>Here's a little easter egg: <Link to="/sus">Click me!</Link>.</p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
