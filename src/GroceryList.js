import useFetch from "./useFetch";
import './styles/TaskList.css'


const GroceryList = ({dataUrl}) => {

    const { data: groceries, isLoading, error } = useFetch(dataUrl);

    return ( 
        <div className="groceryList">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading grocery-list...</div>}
            {groceries && groceries.map((item) => (
                <div className="groceryListItem" key={item.id}>
                    <p>{item.value}</p>
                    <button ></button>
                </div>
            ))}
        </div>
     );
}
 
export default GroceryList;