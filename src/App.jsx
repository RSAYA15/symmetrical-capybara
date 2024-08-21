// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="Octocat.png" className="App-logo" alt="logo" />
//         <p>
//           GitHub Codespaces <span className="heart">♥️</span> React
//         </p>
//         <p className="small">
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;

// import './styles/dropdownStyle.css'

import {Routes, Route} from "react-router-dom";
// import Form from "./pages/form";
import Flow from "./pages/flow";
import Form from "./pages/form";
// import Dropdown from "./pages/dropdown";
// import ServiceDropdown from './pages/AddingService';
import Navigation from "./navigation";
import { Padding } from "@mui/icons-material";
import {Box} from '@mui/material';
import TestScenario from "./pages/testScenario";
import ServiceDetail from "./pages/serviceDetail";
// import Service from './pages/Service'
// import ServiceReorder from "./pages/Flow";


function App() {
  return (
    <>
    {/* <Form1/> */}
    {/* <Flow1/> */}
    {/* <ServiceReorder/> */}
    {/* <Service/> */}
    <div className="app">
      <Navigation/>
      <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', Padding:2 }}>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/flow" element={<Flow/>}/>
        <Route path="/testScenario" element={<TestScenario/>}/>
        <Route path="/serviceDetail" element={<ServiceDetail/>}/>
      </Routes>
      </Box>
    </div>
    {/* <ServiceDropdown/> */}
    {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/dropdown' element={<Dropdown/>}/>
        </Routes>
    </BrowserRouter> */}
    {/* <Dropdown/> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src="Octocat.png" className="App-logo" alt="logo" />
    //     <p>
    //       GitHub Codespaces <span className="heart">♥️</span> React
    //     </p>
    //     <p className="small">
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;

