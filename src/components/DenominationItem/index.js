// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationInfo, denominatorValue} = props
  const {value} = denominationInfo

  const onDenominatorValue = () => {
    denominatorValue(value)
  }

  return (
    <li className="denomination-item">
      <button className="btn" type="button" onClick={onDenominatorValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
