import { useState } from "react";
import Child from "./Child";
// import { DataProvider } from "./transactionContextapi";


function App() {
    const [items , setItems] = useState([]);

    function handelAddItems(item) {
        setItems((items)=>[...items, item])
    }
return(

    <>
<Child items={items} handelAddItems={handelAddItems}/>
{/* <DataProvider>
</DataProvider> */}

{/* <Child/> */}
</>
    
)
}

export default App;
