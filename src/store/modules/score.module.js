const score = {
  state: {
    score: 0,
  },
  getters: {
    getScore: (state) => {
      return state.score;
    },
  },
  mutations: {
    increaseScore: (state, points) => {
      state.score += points;
    },
  },
};

export default score;
