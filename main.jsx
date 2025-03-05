import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Favicon from 'react-favicon'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import Appstore from './utils/Appstore.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={ Appstore }>
    <Favicon iconSize=""  url="https://media.istockphoto.com/id/1620759890/vector/creative-black-open-book-icon-vector-design.jpg?s=612x612&w=0&k=20&c=UVl8nxE4MCgJgMmC5nMhxxh0QJf1H2L2vU503ve1omM="/>
    <App />
  </Provider>
)
