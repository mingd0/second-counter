const Counter = ({ label, value, unit }) => {
  return (
    <div className='counter'>
      <span>{label}</span>
      <span>{value}</span>
      <span>{unit}</span>
    </div>
  )
}

export default Counter
