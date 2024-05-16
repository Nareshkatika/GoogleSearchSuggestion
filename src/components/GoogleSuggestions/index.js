// Write your code here
import {useState} from 'react'
import Solution from '../SuggestionItem'

import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList} = props
  const [search, setSearch] = useState('')

  const onChangeSolution = event => {
    setSearch(event.target.value)
  }

  const Answer = suggestionsList.filter(eachSol =>
    eachSol.suggestion.toLowerCase().includes(search.toLowerCase()),
  )

  const ButtonAnswer = id => {
    setSearch(id)
  }
  return (
    <div className="rowArrangeEl23">
      <img
        className="GooglePageEl"
        alt="google logo"
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
      />
      <div className="row2">
        <img
          className="logoEl1"
          alt="search icon"
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
        />
        <input
          value={search}
          onChange={onChangeSolution}
          placeholder="Search Google"
          type="search"
        />
      </div>
      <ul>
        {Answer.map(eachItem => (
          <Solution
            ButtonAnswer={ButtonAnswer}
            key={eachItem.id}
            items={eachItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default GoogleSuggestions
