import './ExpenseDate.css';
function ExpenseDate(props) {
  const dateParts = props.date.toDateString().split(" ");
  const month = dateParts[1];
  const year = dateParts[3];
  const day = dateParts[2];
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
