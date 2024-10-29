import { useRecoilValue } from 'recoil';
import CreateTodo from './CreateTodo';
import Todo from './Todo';
import { TodoSelector } from '../atom';

export default function TodoList() {
  const [none, visit, like] = useRecoilValue(TodoSelector);
  return (
    <>
      <h1>내가 가고싶은 나라들</h1>
      <CreateTodo />
      <ul>
        {none.map((i) => (
          <Todo key={i.id} {...i} />
        ))}
      </ul>
      <h1>내가 가본 나라들</h1>
      <ul>
        {visit.map((i) => (
          <Todo key={i.id} {...i} />
        ))}
      </ul>
      <h1>내가 좋아하는 나라들</h1>
      <ul>
        {like.map((i) => (
          <Todo key={i.id} {...i} />
        ))}
      </ul>
    </>
  );
}
