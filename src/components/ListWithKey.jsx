function ListWithKey({ arr }) {
  return (
    <>
      <p>Список с ключами</p>
      <ol>
        {arr.map(i => (
          <li key={i.id}>
            {i.title} <input defaultValue="" />
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListWithKey;
