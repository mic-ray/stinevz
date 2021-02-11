const event = {
  state: {
    events: [
      {
        date: new Date("2021-02-12T19:00:00"),
        title: "Game Night",
        fields: ["19:00", 3, "https://uni-hamburg.zoom.us/", "4-10"],
        image: "people",
      },
      {
        date: new Date("2021-02-19T18:00:00"),
        title: "Beer Pong Tournament",
        fields: [
          "18:00",
          10,
          "https://www.google.de/maps",
          "as many as possible",
        ],
        image: "beer",
      },
    ],
  },
  getters: {
    getEvents: (state) => {
      return state.events;
    },
  },
  mutations: {
    addEvent: (state, event) => {
      state.events.unshift(event);
      state.events.sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
};

export default event;
