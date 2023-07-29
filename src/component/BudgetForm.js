import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { Container, Form, Button } from 'react-bootstrap';

function BudgetForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addBudget } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget({ name, amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="budgetName">
          <Form.Control
            type="text"
            placeholder="Budget Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="budgetAmount">
          <Form.Control
            type="number"
            placeholder="Budget Amount"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">Add Budget</Button>
      </Form>
    </Container>
  );
}

export default BudgetForm;
