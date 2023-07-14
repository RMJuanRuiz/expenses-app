import { useState } from 'react';
import './Expenses.scss';

import { ExpenseItem, ExpenseItemInterface } from './ExpenseItem';
import { Card } from '../shared/Card';
import { ExpensesFilter } from './ExpensesFilter';

export const Expenses = ({
  expenses,
}: {
  expenses: ExpenseItemInterface[];
}) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const yearChangeHandler = (year: string) => {
    setFilteredYear(year);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearChange={yearChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </Card>
  );
};
