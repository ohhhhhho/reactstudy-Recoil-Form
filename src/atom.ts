import { atom, selector } from 'recoil';
export interface IToDo {
  text: string;
  id: number;
  category: 'NONE' | 'VISIT' | 'LIKE';
}
export const TodoData = atom<IToDo[]>({
  key: 'ToDo',
  default: [],
});

export const TodoSelector = selector({
  key: 'TodoSelector',
  get: ({ get }) => {
    const getData = get(TodoData);
    return [
      getData.filter((i) => i.category === 'NONE'),
      getData.filter((i) => i.category === 'VISIT'),
      getData.filter((i) => i.category === 'LIKE'),
    ];
  },
});
