import TaskList from './TaskList';
import Home from './Home';
import { Routes, Route, Outlet, Link} from 'react-router-dom'
import Navbar from './Navbar';
import GroceryList from './GroceryList';


function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/assignments" element={<TaskList dataUrl="http://localhost:8000/tasks"/>}></Route>
            <Route path="/groceries" element={<GroceryList dataUrl="http://localhost:8000/groceries"/>}></Route>
          </Routes>
        </div>

      </div>

  );
}

export default App;
