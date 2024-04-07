import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='containers'>
          <SideBar />
          <Main />
      </div>
    </div>
  );
}

export default App;
