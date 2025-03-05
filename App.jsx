
import './App.css'
import Header from './components/header.jsx'
import Home from './components/Home.jsx'
import Browsebooks from './components/Browsebooks.jsx'
import Addbooks from './components/Addbooks.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound.jsx'
import BookDetails from './components/BookDetails.jsx'
function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browsebooks" element={<Browsebooks />} />
        <Route path="/Browsebooks/:category" element={<Browsebooks />} />
        <Route path="/Addbooks" element={<Addbooks />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
