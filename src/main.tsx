import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './constant/css/all.min.css' 
import './constant/css/bootstrap.min.css' 
import './main.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import Context from './Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Context>
  </StrictMode>,
)
