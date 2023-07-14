import './ExpenseItem.scss';
import { ExpenseItemInterface } from '.';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../../shared/Card';

export const ExpenseItem = ({ title, amount, date }: ExpenseItemInterface) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <span className='expense-item__price'>${amount}</span>
      </div>
    </Card>
  );
};
