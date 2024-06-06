import { create } from 'zustand';

export const task = create((set) => ({
  tasks: [],
  modelAddTask: false,
  addTask: (hard, text, tag, data) =>
    set((state) => ({
      tasks: [
        {
          id: Math.random() * 100,
          hard: hard,
          text: text,
          tag: tag,
          data: data,
        },
        ...state.tasks,
      ],
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((e) => e.id != id),
    })),
  setModelAddTask: () =>
    set((state) => ({
      modelAddTask: !state.modelAddTask,
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
