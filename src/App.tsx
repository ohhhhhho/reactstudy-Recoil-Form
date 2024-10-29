import TodoList from './component/TodoList';
import { createGlobalStyle } from 'styled-components';
const GlobalStyled = createGlobalStyle`
li,ul{padding:0;margin:0;list-style:none}
`;

export default function App() {
  return (
    <>
      <GlobalStyled />
      <TodoList />
    </>
  );
}
