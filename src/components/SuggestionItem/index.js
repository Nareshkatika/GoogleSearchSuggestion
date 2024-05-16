// Write your code here
import './index.css'

const Solution = props => {
  const {items, ButtonAnswer} = props
  const {suggestion, id} = items

  const clicker = () => {
    ButtonAnswer(suggestion)
  }
  return (
    <li className="rowArrangeEl1">
      <p>{suggestion}</p>
      <button onClick={clicker} type="button">
        <img
          className="arrowEl"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default Solution
