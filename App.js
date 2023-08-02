import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from './state/index'
function App() {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = actionCreators
  return (
    <div className='App'>
      <h1>{account}</h1>
      <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
      <button onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button>
    </div>
  )
}

export default App
