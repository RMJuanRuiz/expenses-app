import { useState } from 'react';
import './ExpenseForm.scss';
import { ExpenseData } from '..';

enum ExpenseInputControl {
  TITLE = 'title',
  AMOUNT = 'amount',
  DATE = 'date',
}

interface ExpenseFormProps {
  onSaveExpenseData(userInput: ExpenseData): void;
}

export const ExpenseForm = ({ onSaveExpenseData }: ExpenseFormProps) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  } as ExpenseData);

  const inputChangeHandler = (
    identifier: ExpenseInputControl,
    value: string
  ) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSaveExpenseData(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={(event) =>
              inputChangeHandler(ExpenseInputControl.TITLE, event.target.value)
            }
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.amount}
            onChange={(event) =>
              inputChangeHandler(ExpenseInputControl.AMOUNT, event.target.value)
            }
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={userInput.date}
            onChange={(event) =>
              inputChangeHandler(ExpenseInputControl.DATE, event.target.value)
            }
          ></input>
        </div>
      </div>
      <div className='new_expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
