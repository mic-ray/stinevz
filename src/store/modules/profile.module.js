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
    visibility: {
      semester: true,
      age: true,
    },
    hobbies: ["Cooking", "Volleyball", "Skiing, Snowboard"],
    socials: [
      { label: "Instagram", text: "https://www.instagram.com/marco.polo95/" },
      {
        label: "LinkedIn",
        text: "http://ca.linkedin.com/in/linkedin/MarcoPolo",
      },
    ],
  },
  getters: {
    getTextInfo: (state) => {
      return state.textInfo;
    },
    getVisibility: (state) => {
      return state.visibility;
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
      Object.assign(state.visibility, visibility);
      state.textInfo.semester.visible = visibility.semester;
      state.textInfo.age.visible = visibility.age;
    },
    updateHobbies: (state, hobbies) => {
      state.hobbies = [...hobbies];
    },
    updateSocials: (state, socials) => {
      state.socials = JSON.parse(JSON.stringify(socials));
    },
  },
};

export default profile;
