import './App.css';

// Adding functional component
const Link = (props) => (
  <p>My first functional component</p>  
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>TV Series List</h1>
      </header>  
      <Link />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
