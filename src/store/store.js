import { create } from 'zustand';

export const task = create((set) => ({
  tasks: [],
  textTask: '',
  addTask: () =>
    set((state) => ({
      tasks: [
        { id: Math.random() * 100, text: state.textTask },
        ...state.tasks,
      ],
      textTask: '',
    })),
  addTextTask: (text) => set(() => ({ textTask: text })),
}));

export const sign = create((set) => ({
  account: false,
  users: [],
  inputUsername: '',
  inputPassword: '',
  inputEmail: '',
  addUsers: () =>
    set((state) => ({
      users: [
        {
          username: state.inputUsername,
          email: state.inputEmail,
          password: state.inputPassword,
        },
        ...state.users,
      ],
      account: true,
      inputUsername: '',
      inputPassword: '',
      inputEmail: '',
    })),
  addTextUsername: (text) => set(() => ({ inputUsername: text })),
  addTextPassword: (text) => set(() => ({ inputPassword: text })),
  addTextEmail: (text) => set(() => ({ inputEmail: text })),
}));
