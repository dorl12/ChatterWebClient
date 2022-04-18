import React from 'react';
import './App.css';
import LogInPage from './LogInPage/LogInPage';
import Pages from './Pages';
import RegisterPage from './RegisterPage/RegisterPage';
import ChatPage from "./Pages/ChatPage"
import { BrowserRouter ,Route, Switch } from 'react-router-dom';

function App() {
  const [userName, setUser] = React.useState("Empty")

  function updateUser(newName) {
    setUser(newName)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogInPage updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <RegisterPage updateUser={updateUser}/>
          </Route>
          <Route path="/chatPage">
            <ChatPage username={userName}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
//<Pages handleClick={changePage} isLogin={isLoginPage}/>