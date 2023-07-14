import './NewExpense.scss';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseData } from '.';

interface NewExpenseProps {
  onAddExpense(expenseData: ExpenseData): void;
}

export const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
