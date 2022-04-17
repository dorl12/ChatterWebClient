import React from 'react';
import './App.css';
import Pages from './Pages';

function App() {
  const [isLoginPage, setPage] = React.useState(
    true
    )

  function changePage() {
    setPage(prev => !prev)
  }

  return (
    <div className="App">
      <Pages handleClick={changePage} isLogin={isLoginPage}/>
    </div>
  );
}
export default App;
