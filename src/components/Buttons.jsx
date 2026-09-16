function Buttons({ list, setList }) {
  const handleClick = () => {
    // Находим случайный индекс от 0 до конца массива
    const randomIndex = Math.floor(Math.random() * list.length);

    setList(prev =>
      prev.map((i, index) => {
        if (index === randomIndex) {
          // Если индекс совпал, возвращаем копию объекта с измененным title
          return { ...i, title: "Элемент обновлен!!!" };
        }
        return i;
      }),
    );
  };

  return (
    <div>
      <button
        onClick={() =>
          setList(prev => [
            { id: crypto.randomUUID(), title: "Новый элемент в начале" },
            ...prev,
          ])
        }>
        Добавить элемент в начало
      </button>
      <button
        onClick={() =>
          setList(prev => [
            ...prev,
            { id: crypto.randomUUID(), title: "Новый элемент в конце" },
          ])
        }>
        Добавить элемент в конец
      </button>
      <button
        onClick={() => setList(prev => prev.filter((i, index) => index !== 0))}>
        Удалить первый
      </button>
      <button
        onClick={() =>
          setList(prev => [...prev].sort(() => Math.random() - 0.5))
        }>
        Перемешать список
      </button>
      <button onClick={handleClick}>Обновить случайный элемент</button>
    </div>
  );
}

export default Buttons;
