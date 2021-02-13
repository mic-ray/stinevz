const group = {
  state: {
    groups: [
      {
        title: "Healthy Cooking",
        members: 165,
        posts: [
          {
            title: "Veganes Chili Sin Carne",
            author: "Hanna Lester",
            description:
              "Dieses vegane Chili ist schnell gemacht und hält sich lange, da es kein Fleisch enthält, was man jedoch überhaupt nicht merkt. Durch die pflanzlichen Proteine, Vitamine und Nährstoffe wie Eisen, Kalium und Magnesium ist es super gesund.",
            likes: 12,
            comments: 5,
            image: "chili",
          },
          {
            title: "Suche Protein Power Rezept",
            author: "Sarah Müller",
            description:
              "Kennt jemand ein aktivierendes, proteinreiches Rezept?",
            likes: 3,
            comments: 13,
          },
          {
            title: "Cous-cous Salat",
            author: "Marco Polo",
            description:
              "Beim Kochen ist es weniger die Faulheit, sondern meistens die Entscheidungsmüdigkeit und Ideenlosigkeit, die uns daran hindert, uns täglich gesund zu ernähren. Falls es euch auch so geht, dann ist der heutige Meal Prep-Couscous-Salat bestimmt genau euer Ding. Einmal kochen, viermal essen! Mit circa 15 Minuten investierter Zeit, könnt ihr für vier Tage euer Mittag vorbereiten. Ist das nicht genial?",
            likes: 10,
            comments: 4,
            image: "salad",
          },
        ],
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
