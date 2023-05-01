import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { legacy_createStore as createStore } from 'redux'
import showReducer from './reducers/showReducer'
import { Provider } from 'react-redux'

// skapa vår store utefter vår reducer (som har tagit in vårt initiala store)
const store = createStore(showReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
