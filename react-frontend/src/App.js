import logo from './logo.svg';
import './App.css';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
     
        <HeaderComponent/>
            <div className="container">
              <Routes>
                 <Route exact path = "/" element= {<ListEmployeeComponent/>}></Route>
                 <Route  path = "/employees" element= {<ListEmployeeComponent/>}></Route>
                 <Route path = "/add-employee" element= {<CreateEmployeeComponent/>}></Route>
                 <Route path = "/view-employee/:id" element= {<ViewEmployeeComponent/>}></Route>
                 <Route path = "/update-employee/:id" element= {<UpdateEmployeeComponent/>}></Route>
               
              </Routes>
            </div>
        <FooterComponent/>
      
      </BrowserRouter>
    </div>

  
  );
}

export default App;
