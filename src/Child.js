import "./App.css";
import { useState } from "react";
import ListData from "./ListData";


const Child = ({ items, handelAddItems }) => {
  const [newAmount, setnewAmount] = useState(0);
  const [newDesc, setnewDesc] = useState("");

  const handleAddition = (event) => {
    event.preventDefault();
    const newItems = { newAmount,newDesc , id: Date.now()};
    console.log(newItems);
    // handelAddItems is setItems() this is created in app.js
    handelAddItems(newItems);
    setnewAmount(0);
    setnewDesc("");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>

        <h3>Your Balance</h3>

        <div className="expense-container">
          <h3>Income</h3>
          <h3>Expence</h3>
        </div>

        <h3>History</h3>
        <hr />

        <ListData transObj={items}/>

        <h3>Add new transaction</h3>
        <hr />

        <form className="transaction-form" onSubmit={handleAddition}>
          <label>
            Enter Description <br />
            <input
              type="text"
              value={newDesc}
              placeholder="Description"
              onChange={(e) => setnewDesc(e.target.value)}
              required
            />
          </label>

          <br />
          <label>
            Enter Amount <br />
            <input
              type="number"
              value={newAmount}
              placeholder="Amount"
              onChange={(e) => setnewAmount(e.target.value)}
              required
            />
          </label>
          <br />
          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    </>
  );
};
export default Child;
