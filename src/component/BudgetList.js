import React, { useContext, useState, useEffect } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { Container, ListGroup, Button } from 'react-bootstrap';
import '../App.css';

function BudgetList() {
  const { budgets } = useContext(BudgetContext);
  const [sortedBudgets, setSortedBudgets] = useState(budgets);
  const [sortType, setSortType] = useState(null);
  const [sortDirection, setSortDirection] = useState({ name: null, amount: null });

  // Update sortedBudgets whenever budgets context changes
  useEffect(() => {
    setSortedBudgets(budgets);
  }, [budgets]);

  const sortByName = () => {
    const newSortDirection = sortDirection.name === 'asc' ? 'desc' : 'asc';
    const sortedByName = [...sortedBudgets].sort((a, b) =>
      newSortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setSortedBudgets(sortedByName);
    setSortType('name');
    setSortDirection({ ...sortDirection, name: newSortDirection });
  };

  const sortByAmount = () => {
    const newSortDirection = sortDirection.amount === 'asc' ? 'desc' : 'asc';
    const sortedByAmount = [...sortedBudgets].sort((a, b) =>
      newSortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount
    );
    setSortedBudgets(sortedByAmount);
    setSortType('amount');
    setSortDirection({ ...sortDirection, amount: newSortDirection });
  };

  return (
    <Container className="mt-4">
      <h2>Budget List</h2>
      <div className="space-around-container">
        <Button variant="secondary" onClick={sortByName}>
          Sort by Name{' '}
          {sortType === 'name' && (
            <i className={`fas fa-arrow-${sortDirection.name === 'asc' ? 'up' : 'down'}`} />
          )}
        </Button>
        <Button variant="secondary" className="ml-2" onClick={sortByAmount}>
          Sort by Amount{' '}
          {sortType === 'amount' && (
            <i className={`fas fa-arrow-${sortDirection.amount === 'asc' ? 'up' : 'down'}`} />
          )}
        </Button>
      </div>
      <ListGroup>
        {sortedBudgets.map((budget) => (
          <ListGroup.Item key={budget.id} className="bg-light my-1">
            <div className="d-flex justify-content-around">
              <div>{budget.name}</div>
              <div>${budget.amount.toFixed(2)}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default BudgetList;
