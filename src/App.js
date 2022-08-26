
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import Header from './components/Header';
import Lifecycle from './Lifecycle'
import EventFunction from './EventFunction';
import EventClass from './EventClass';
import ConditionC from './ConditionC';

import FormHandling from './FormHanling';

import MapFunction from './MapFunction';
import BigFile from './BigFile';
import UseStatehooks from './UseStatehooks';
import UseEffecthooks from './UseEffecthooks';
import FormsHandlinghooks from './FormsHandlinghooks';
import { useState } from 'react';
import Formsubmission from './Formsubmission';
import FormAuthentication from './FormAuthentication';

import Routs from './Routs';
import Routproject from './Routproject';
import FetchApi from './FetchApi';
import CryptoSearch from './CryptoSearch';
import ContextApi from './ContextApi';
import LastProject from './LastProject';
import LastProjectNav from './LastProjectNav';
import LastProjectForm from './LastProjectForm';
import LastProjectHeroList from './LastProjectHeroList';
import LastProjectContextProvider from './LastProjectContextFile'





function App() {
  

  

  return (
    <LastProjectContextProvider>
    <div> 
      <LastProjectNav  />
       
       {/* <LastProjectForm />    */}
    
    <div className="App">
      <header className="App-header">
      
      
       
        
        <Header />  
          
          
      
      </header>
      </div>
    </div>
    </LastProjectContextProvider>
  );
}

export default App;
