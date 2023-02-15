//import { Link } from 'react-router-dom'
import './Sus.css'
import image from './Sus Dance.gif'

/**
 * A React component that represents the Sus page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Sus = props => {
  return (
    <>
      <h1>Sus</h1>
      <p>you are sussy</p>
      <div><p><img style={{}} src={image} alt="sus sus amogus" /></p></div>
    </>
  )
}

// make this component available to be imported into any other file
export default Sus