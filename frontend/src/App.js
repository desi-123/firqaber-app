import Footer from './components/home/Footer'
import Navbar from './components/home/header/Navbar'
import Home from './components/screens/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/About'
import Terms from './components/Terms'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/term" component={Terms} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
