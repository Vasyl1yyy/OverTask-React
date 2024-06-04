import { create } from 'zustand';

export const task = create((set) => ({
  tasks: [],
  addTask: (hard, text, tag, data) =>
    set((state) => ({
      tasks: [
        { id: 1, hard: hard, text: text, tag: tag, data: data },
        ...state.tasks,
      ],
    })),
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
