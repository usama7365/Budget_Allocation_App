import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import BudgetForm from './component/BudgetForm';
import BudgetList from './component/BudgetList';
import { BudgetProvider } from './context/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Container>
          <h1 className="text-center mt-4 mb-3">Budget Allocation App</h1>
          <BudgetForm />
          <BudgetList />
        </Container>
      </div>
    </BudgetProvider>
  );
}

export default App;
