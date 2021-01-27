const group = {
  state: {
    groups: [
      {
        title: "Healthy Cooking",
        members: 165,
      },
      {
        title: "ITIT 4 Life - Learning Group",
        members: 54,
        messages: 4,
      },
      {
        title: "Among Us",
        members: 382,
        messages: 10,
      },
    ],
  },
  getters: {
    getGroups: (state) => {
      return state.groups;
    },
  },
  mutations: {
    decrementGroupMessages: (state, groupTitle) => {
      state.groups = state.groups.map((x) => {
        return x.title === groupTitle ? { ...x, messages: --x.messages } : x;
      });
    },
  },
};

export default group;
