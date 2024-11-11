
import './App.css';
import Navbar from './components/navbar/navbar';
import AdminPage from './components/pages/adminpage';
import Sidebar from './components/sidebar/sidebar';
import TabularData from './components/table/TabularData';
import { useState } from 'react';
function App() {
  const [showTable, setShowTable] = useState(false);
  const handleSearchClick = () => {
    setShowTable(true); 
  };
  const handleClear= ()=>{
    setShowTable(false);
  }
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <div className='container'>
        <AdminPage onSearchClick={handleSearchClick} onClearClick ={handleClear}/>
      </div>
      
      {showTable && (
        <div>
      <TabularData/>
      </div>)}
   
    </div>
  );
}

export default App;
