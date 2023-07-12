import './ExpenseDate.scss';

export const ExpenseDate = ({ date }: { date: Date }) => {
  const languageFormat = 'en-US';
  const month = date.toLocaleDateString(languageFormat, { month: 'long' });
  const day = date.toLocaleDateString(languageFormat, { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <span className='expense-date__month'>{month}</span>
      <span className='expense-date__day'>{day}</span>
      <span className='expense-date__year'>{year}</span>
    </div>
  );
};
