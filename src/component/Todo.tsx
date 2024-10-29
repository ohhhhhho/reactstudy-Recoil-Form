import { useSetRecoilState } from 'recoil';
import { IToDo, TodoData } from '../atom';

export default function Todo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(TodoData);

  const onDelete = () => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onChangeCategory = (newCategory: IToDo['category']) => {
    setToDos((prev) => {
      const targetIdx = prev.findIndex((todo) => todo.id === id);
      const updatedTodo = { text, id, category: newCategory };
      return [
        ...prev.slice(0, targetIdx),
        updatedTodo,
        ...prev.slice(targetIdx + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category === 'NONE' && (
        <>
          <button onClick={() => onChangeCategory('VISIT')}>✅</button>
          <button onClick={onDelete}>🗑️</button>
        </>
      )}
      {category === 'VISIT' && (
        <>
          <button onClick={() => onChangeCategory('LIKE')}>👍🏻</button>
          <button onClick={() => onChangeCategory('NONE')}>❌</button>
        </>
      )}
      {category === 'LIKE' && (
        <button onClick={() => onChangeCategory('VISIT')}>👎🏻</button>
      )}
    </li>
  );
}
