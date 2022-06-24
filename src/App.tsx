import './App.css';
import { SidebarMenu } from './components/sidebar/SidebarMenu';
import NavbarMenu from './components/navbar/NavbarMenu';
import { Main } from './components/mainContainer/Main';


function App() {
  return (
    <>
    <NavbarMenu />
      <div className="App">
        <SidebarMenu />
        <Main />
      </div>
    </>
    
  );
}

export default App;
