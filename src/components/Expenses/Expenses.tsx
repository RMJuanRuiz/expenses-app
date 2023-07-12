import './Expenses.scss';
import { ExpenseItem, ExpenseItemInterface } from './ExpenseItem';
import { Card } from '../shared/Card';

export const Expenses = ({
  expenses,
}: {
  expenses: ExpenseItemInterface[];
}) => {
  return (
    <Card className='expenses'>
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
