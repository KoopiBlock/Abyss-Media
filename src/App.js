import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Form from './Pages/Form';
import BlogPost from './Components/BlogPost/BlogPost';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/post/:slug' element={<BlogPost />} />
        <Route path='/contact' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
