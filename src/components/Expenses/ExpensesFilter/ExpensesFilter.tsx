import './ExpensesFilter.scss';

interface ExpensesFilterProps {
  selectedYear: string;
  onYearChange(year: string): void;
}

export const ExpensesFilter = ({
  selectedYear,
  onYearChange,
}: ExpensesFilterProps) => {
  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectChangeHandler} value={selectedYear}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
