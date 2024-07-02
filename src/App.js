import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Services/services';
import Blog from './components/Blog/blog';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

const App=()=> {
  return(
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;
