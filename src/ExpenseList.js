import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; 

function ExpenseList({ expenses, deleteExpense }) {
  const [loading, setLoading] = useState(false); 

  const handleDelete = (index) => {
    setLoading(true);
    deleteExpense(index);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="mt-4 mb-3" style={{ color: '#ffff07' }}>Expenses :</h2>
      <ul className="list-group">
        {expenses.map((expense, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex align-items-center">
                <span className="mr-2">{expense.name}: ₹ {expense.amount.toFixed(2)}</span>
              </div>
              <div className="text-muted">{new Date(expense.date).toLocaleDateString()}</div>
            </div>
            <Button onClick={() => handleDelete(index)} className="btn btn-danger" disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
