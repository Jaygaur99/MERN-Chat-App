import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/chats" component={ChatPage} exact />
      <Route path="/" component={HomePage} exact />
    </div>
  );
}

export default App;
