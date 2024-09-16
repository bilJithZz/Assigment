import logo from './logo.svg';
import './App.css';
import Navbar from './Home/Navbar';
import Home from './Home/Home';
import Middle from './Home/Middle';
import List from './Home/Lists';
import Footer from './Home/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Middle />
    
   <List/>
   <Footer />
    </div>
  );
}

export default App;
