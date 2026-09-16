import { useState } from "react";
import Buttons from "./components/Buttons";
import ListWithKey from "./components/ListWithKey";
import ListWithoutKey from "./components/ListWithoutKey";

const arr = [];
for (let i = 1; i < 1001; i++) {
  arr.push({ id: crypto.randomUUID(), title: `Элемент ${i}` });
}

function App() {
  const [list, setList] = useState(arr);
  const [withKey, setWithKey] = useState(true);
  return (
    <>
      <Buttons list={list} setList={setList} />
      <button onClick={() => setWithKey(prev => !prev)}>
        Переключить список
      </button>
      {withKey ? <ListWithKey arr={list} /> : <ListWithoutKey arr={list} />}
    </>
  );
}

export default App;
