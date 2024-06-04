import { create } from 'zustand';

export const task = create((set) => ({
  tasks: [],
  textTask: '',
  addTask: () =>
    set((state) => ({
      tasks: [
        {
          id: Math.random() * 100,
          hard: '',
          text: state.textTask,
          tag: '',
          data: '',
        },
        ...state.tasks,
      ],
      textTask: '',
    })),
  addTextTask: (text) => set(() => ({ textTask: text })),
}));

export const sign = create((set) => ({
  account: null,
  users: [],
  addUsers: (username, email, password) =>
    set((state) => ({
      users: [
        {
          username: username,
          email: email,
          password: password,
        },
        ...state.users,
      ],
      account: {
        username: username,
        email: email,
        password: password,
      },
    })),
}));
