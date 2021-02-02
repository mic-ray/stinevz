<template>
  <div class="events-container">
    <div class="upcoming-container">
      <div class="heading-container">
        <h2 class="heading">
          Your events
        </h2>
        <div>
          <input
            class="events-search mr-2"
            type="text"
            placeholder="Search..."
          />
          <v-btn class="white--text text-capitalize" color="#0271bb">
            <v-icon>mdi-plus</v-icon>Create event</v-btn
          >
        </div>
      </div>
      <template v-for="event in upcomingEvents">
        <div :key="event.title" class="event-container mt-2 event-row">
          <div class="event-column">
            <h3 class="heading">{{ event.date }}: {{ event.title }}</h3>
            <template v-for="(field, i) in fields">
              <div :key="field" class="field-container">
                <span class="bold">{{ field }}:</span>
                {{ event.fields[i] }}
              </div>
            </template>
          </div>

          <img
            class="event-image"
            :src="getImage(event.image)"
            alt="Event image"
          />
        </div>
      </template>
    </div>
    <div class="calender-container">
      <div class="calendar">
        <div class="calendar-controls mb-2">
          <v-btn color="#e2001a" @click="prev()">
            <v-icon color="white">mdi-chevron-left</v-icon>
          </v-btn>
          <h3 class="heading" v-if="$refs.calendar">
            {{ calendarTitle }}
          </h3>
          <v-btn color="#e2001a" @click="next()">
            <v-icon color="white">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <v-sheet height="275" elevation="2">
          <v-calendar
            ref="calendar"
            v-model="calendarFocus"
            :events="calendarEvents"
            type="month"
            :weekdays="[1, 2, 3, 4, 5, 6, 0]"
            @change="updateTitle"
          ></v-calendar>
        </v-sheet>
      </div>
      <div class="throwback mt-2">
        <h2 class="heading">Throwback</h2>
        <div class="throwback-container">
          <h3 class="heading">20th of December: Bake Biscuits</h3>
          <div><span class="bold">Number of participants:</span> 15</div>

          <span class="bold">Memories:</span>
          <div>
            <img
              :src="getImage('christmas')"
              alt="Cookies"
              class="memory-image"
            />
            <img :src="getImage('santa')" alt="Santa" class="memory-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.calendar.move(0);
  },
  methods: {
    getImage: function(path) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + path + ".png");
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    updateTitle: function({ start }) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      this.calendarTitle = months[start.month - 1] + " " + start.year;
    },
  },
  data: () => ({
    calendarFocus: "",
    calendarTitle: "",
    fields: [
      "Time",
      "Number of participants",
      "Already registered",
      "Meeting point",
    ],
    upcomingEvents: [
      {
        date: "12th of February",
        title: "Game Night",
        fields: ["19:00", "4-10", 3, "https://uni-hamburg.zoom.us/"],
        image: "people",
        timestamp: "2021-02-12 19:00",
      },
      {
        date: "19th of February",
        title: "Beer Pong Tournament",
        fields: [
          "18:00",
          "as many as possible",
          10,
          "https://www.google.de/maps",
        ],
        image: "beer",
        timestamp: "2021-02-19 18:00",
      },
    ],
  }),
  computed: {
    calendarEvents: function() {
      const events = [];
      this.upcomingEvents.forEach((x) => {
        events.push({
          name: x.title,
          start: x.timestamp,
          color: "#e2001a",
        });
      });
      return events;
    },
  },
};
</script>
<style>
.events-container {
  display: grid;
  grid-template-columns: 2fr 1.25fr;
  column-gap: 25px;
}
.upcoming-container {
  display: flex;
  flex-direction: column;
}
.events-search {
  padding: 5px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
}

.event-container {
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 10px;
}

.event-column {
  display: flex;
  flex-direction: column;
}

.event-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.field-container {
  margin: 5px 0px;
}

.event-image {
  width: 150px;
}

.calendar-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.throwback-container {
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 10px;
}

.memory-image {
  height: 100px;
  border: 2px solid #e2001a;
  margin-right: 5px;
}
</style>
