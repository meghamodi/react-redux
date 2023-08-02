import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // Import Redux Thunk middleware
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export default store
