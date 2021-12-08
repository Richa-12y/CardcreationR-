import './App.css';
import { useState } from 'react';

function App() {
  const[navigationPage,setNavigationPage]= useState('idle')

  const getCricketClick = () => {
    setNavigationPage('cricket')
  }

  const getCricketClick1 = () => {
    setNavigationPage('cricketq')
  }


  const getCricketClick2 = () => {
    setNavigationPage('cricketqb')
  }

  return (
    <div className="App">
    <div className="maindiv">
    
    <div className="imgdiv" onClick={getCricketClick}style={{backgroundImage:`url('https://tse4.mm.bing.net/th?id=OIP.zqt_DmJfa1gEpM7Y-tzK_AHaFj&pid=Api&P=0&w=202&h=152')`}}>
    </div>
    {navigationPage==='cricket' && <p>"No dream is ever chased alone"</p>}
   </div>
   
   <div className="maindiv">
    
   <div className="imgdiv" onClick={getCricketClick1}style={{backgroundImage:`url('https://tse1.mm.bing.net/th?id=OIP.zV3t3_fxBIeHexdhKB7uIgHaEo&pid=Api&P=0&w=250&h=157')`}}>
   </div>
   {navigationPage==='cricketq' && <p>"You don't play for the crowd, you play for the country"</p>}
  </div>

  <div className="maindiv">
    
  <div className="imgdiv" onClick={getCricketClick2}style={{backgroundImage:`url('https://tse3.mm.bing.net/th?id=OIP.bBTTsIr3F333V0tAD7WCCgHaHa&pid=Api&P=0&w=300&h=300')`}}>
  </div>
  {navigationPage==='cricketqb' && <p>"This seems to have targets for dinner"</p>}
 </div>


    </div>
  );
}

export default App;
