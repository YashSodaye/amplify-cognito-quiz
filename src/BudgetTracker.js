import React, { useState } from 'react';

function BudgetTracker() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddItem = () => {
    if (itemName.trim() !== '' && !isNaN(itemAmount) && itemAmount > 0) {
      const newItem = {
        name: itemName,
        amount: parseFloat(itemAmount)
      };
      setItems([...items, newItem]);
      setTotalExpense(totalExpense + parseFloat(itemAmount));
      setItemName('');
      setItemAmount('');
    } else {
      alert('Please enter valid item name and amount!');
    }
  };

  return (
    <div className='budget-tracker'>
      <h2>Budget Tracker</h2>
      <div className='expense-form'>
        <input
          type='text'
          placeholder='Item Name'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Amount'
          value={itemAmount}
          onChange={(e) => setItemAmount(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Expense</button>
      </div>
      <div className='expense-list'>
        <h3>Expense List</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}: ${item.amount}
            </li>
          ))}
        </ul>
        <div className='total-expense'>
          <strong>Total Expense:</strong> ${totalExpense}
        </div>
      </div>
    </div>
  );
}

export default BudgetTracker;
