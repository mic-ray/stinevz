const profile = {
  state: {
    textInfo: {
      name: {
        field: "Name",
        text: "Marco",
        visible: true,
      },
      fieldOfStudy: {
        field: "Field of Study",
        text: "IT-Management and -Consulting",
        visible: true,
      },
      semester: {
        field: "Semester",
        text: "3",
        visible: true,
      },
      age: {
        field: "Age",
        text: "25",
        visible: true,
      },
    },
    hobbies: ["Cooking", "Volleyball", "Skiing, Snowboard"],
    socials: [
      { title: "Instagram", text: "https://www.instagram.com/marco.polo95/" },
      {
        title: "LinkedIn",
        text: "http://ca.linkedin.com/in/linkedin/MarcoPolo",
      },
    ],
  },
  getters: {
    getTextInfo: (state) => {
      return state.textInfo;
    },
    getHobbies: (state) => {
      return state.hobbies;
    },
    getSocials: (state) => {
      return state.socials;
    },
  },
  mutations: {
    updateVisibility: (state, visibility) => {
      state.textInfo.semester.visible = visibility.semester;
      state.textInfo.age.visible = visibility.age;
    },
  },
};

export default profile;
