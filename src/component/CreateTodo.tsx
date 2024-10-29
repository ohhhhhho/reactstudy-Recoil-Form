import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { TodoData } from '../atom';
import styled from 'styled-components';
const Form = styled.form`
  display:flex;
  flex-direction: column;
  span{
    color:#ff6912;
  }
`;
interface TodoData {
  [key: string]: string;
}
export default function CreateTodo() {
  const setTodo = useSetRecoilState(TodoData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TodoData>();
  const onValid = (data) => {
    setValue('todo', '');
    setTodo((pre) => [
      { text: data?.todo, id: Date.now(), category: 'NONE' },
      ...pre,
    ]);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('todo', {
            required: '😠 required!',
          })}
        />
        <span>{errors?.todo?.message}</span>
        <button>가자</button>
      </Form>
    </>
  );
}
