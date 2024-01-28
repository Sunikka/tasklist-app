import './styles/Navbar.css'

const Navbar = () => {
  const title = "Assignment Board";

    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <p><a href="/assignments">Assignments</a></p>
            <p><a href="/chores">Household chores</a></p>
            <p><a href="/groceries">Grocery-List</a></p>


        </nav>
    );
}
 
export default Navbar;