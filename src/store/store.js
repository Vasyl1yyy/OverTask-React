import { create } from 'zustand';

const checkText = (m, text) => {
  let tag = true;
  for (let i = 0; i < m.length; i++) {
    if (m[i] == text) {
      tag = false;
    }
  }
  return tag ? [text, ...m] : m;
};

export const task = create((set) => ({
  tasks: [],
  modelAddTask: false,
  inputTag: '',
  tag: ['dev'],
  setTag: () =>
    set((state) => ({
      tag: checkText(state.tag, state.inputTag),
    })),
  useTag: (text) =>
    set(() => ({
      inputTag: text,
    })),

  setInputTag: (text) =>
    set(() => ({
      inputTag: text,
    })),
  addTask: (difficult, text, data) =>
    set((state) => ({
      tasks: [
        {
          id: Math.random() * 100,
          difficult: difficult,
          text: text,
          tag: state.inputTag,
          data: data,
          active: false,
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
  setActiveTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((e) =>
        e.id == id ? { ...e, active: !e.active } : e
      ),
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
