function ListWithoutKey({ arr }) {
  return (
    <>
      <p>Список без ключей</p>
      <ol>
        {arr.map(i => (
          <li>
            {i.title} <input defaultValue="" />
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListWithoutKey;
