const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

export default function ProjectFilter({ filter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
    console.log(filter);
  };

  return (
    <div className='project-filter'>
      <nav>
        <p>Filter by: </p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={filter === f ? 'active' : ''}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
