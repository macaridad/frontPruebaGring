import './App.css';
import logo from './assets/logo.png'

function App() {

  return (
    <div className='container'>
        <div className='title-div'>
          <h1 className='title'>Gringotts Bank ¡Comming Soon!</h1>
        </div>

        <div className='logo'>
          <img src={logo} width={580} className='img' alt="logo"/>
        </div>
    </ div>
  );
}

export default App;
