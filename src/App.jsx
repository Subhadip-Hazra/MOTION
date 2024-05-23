import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Explore, Home } from './pages'

const App = () => {
    return (
        <main className='bg-slate-300/15'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Explore/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    )
}

export default App