import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './scss/index.scss'
import App from './components/App/App'
import { setupStore } from './store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
