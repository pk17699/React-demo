import './App.css';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
    return (
      <div className="App">
        <h1>Flipkart</h1>
        <br/>
        <Profile name="prashant"/>
        <Home/>
      </div>
    );
}

export default App;
