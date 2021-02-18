<template>
  <div class="events-container">
    <div class="upcoming-container">
      <div class="heading-container">
        <h2 class="heading">
          Your events
        </h2>
        <div style="display: flex; align-content:baseline;">
          <input
            class="events-search mr-2"
            type="text"
            placeholder="Search..."
          />
          <v-dialog v-model="dialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="white--text text-capitalize"
                color="#0271bb"
                height="40"
                elevation="0"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>Create event</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="heading">Create a new event</span>
              </v-card-title>
              <v-card-text style="color:black; font-size:1rem;">
                <v-row justify="center" align="start">
                  <v-col>
                    <span class="bold">Choose a date:</span>
                    <v-date-picker
                      v-model="dialogDate"
                      color="#e2001a"
                      first-day-of-week="1"
                    ></v-date-picker
                  ></v-col>
                  <v-col>
                    <span class="bold">Choose a time:</span>
                    <v-time-picker
                      v-model="dialogTime"
                      format="24hr"
                      color="#e2001a"
                    ></v-time-picker>
                  </v-col>
                </v-row>
                <div class="event-dialog-container">
                  <template v-for="field in dialogFields">
                    <span :key="field.label + 'span'" class="bold"
                      >{{ field.label }}:</span
                    >
                    <input
                      :key="field.label + 'input'"
                      v-if="field.label !== 'Description'"
                      class="dialog-input"
                      type="text"
                      style="width:250px;"
                      v-model="field.model"
                    />
                    <textarea
                      :key="field.label + 'text'"
                      v-if="field.label === 'Description'"
                      class="dialog-input "
                      rows="3"
                      v-model="field.model"
                    ></textarea>
                  </template>
                  <span class="bold">Image:</span>
                  <div
                    style="height:30px;"
                    @click="dialogFileChosen = !dialogFileChosen"
                  >
                    <div class="mt-1" v-if="dialogFileChosen">
                      Chosen File:
                      <i>Documents/Images/Icons/film.png</i>
                    </div>
                    <div v-else>
                      <v-btn
                        style="height:30px;"
                        class="text-capitalize"
                        color="#0271bb"
                        text
                        ><v-icon class="mr-2">mdi-upload</v-icon>Upload</v-btn
                      >
                      or
                      <v-btn
                        style="height:30px;"
                        class="text-capitalize"
                        color="#0271bb"
                        text
                        ><v-icon class="mr-2">mdi-folder</v-icon
                        >Documents</v-btn
                      >
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#0271bb" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="#0271bb" text @click="saveEvent">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <template v-for="event in upcomingEvents">
        <div :key="event.title" class="event-container mt-1 event-row">
          <div class="event-column">
            <h3 class="heading">
              {{ convertToStringDate(event.date) }}: {{ event.title }}
            </h3>
            <template v-for="(field, i) in fields">
              <div :key="field" class="field-container">
                <span class="bold">{{ field }}:</span>
                {{ event.fields[i] }}
              </div>
            </template>
            <v-btn
              class="text-capitalize"
              style="align-self:start;"
              color="#0271bb"
              text
              ><v-icon class="mr-2">mdi-share-variant</v-icon>Invite</v-btn
            >
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
        <div class="calendar-controls mb-1">
          <v-btn elevation="0" height="41" color="#e2001a" @click="prev()">
            <v-icon color="white">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="heading" v-if="$refs.calendar">
            {{ calendarTitle }}
          </h2>
          <v-btn elevation="0" height="41" color="#e2001a" @click="next()">
            <v-icon color="white">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <v-sheet height="275">
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
      <div class="throwback mt-1">
        <h2 class="heading">Throwback</h2>
        <div class="throwback-container">
          <h3 class="heading">20. December: Bake Biscuits</h3>
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
    <Toast ref="toast">
      Created an event! <span class="bold">+10 Stinchen</span>
    </Toast>
  </div>
</template>

<script>
import Toast from "../components/Toast";
export default {
  components: { Toast },
  mounted() {
    this.$refs.calendar.move(0);
  },
  methods: {
    convertToStringDate(date) {
      return `${date.getDate()}. ${this.months[date.getMonth()]}`;
    },
    getImage: function(path) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + path + ".png");
    },
    saveEvent: function() {
      var event = {
        date: new Date(this.dialogDate + " " + this.dialogTime),
        title: this.dialogFields.title.model,
        fields: [
          this.dialogTime,
          1,
          this.dialogFields.meetingPoint.model,
          this.dialogFields.participants.model,
        ],
        image: "film",
      };
      this.$store.commit("addEvent", event);
      this.dialog = false;
      this.$store.commit("increaseScore", 10);
      this.$refs.toast.display();
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    updateTitle: function({ start }) {
      this.calendarTitle = this.months[start.month - 1] + " " + start.year;
    },
  },
  data: () => ({
    months: [
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
    ],
    dialog: false,
    dialogDate: new Date().toISOString().substr(0, 10),
    dialogTime: "12:00",
    dialogFields: {
      title: {
        label: "Title",
        model: "Netflix WatchParty - Brooklyn 99",
      },
      description: {
        label: "Description",
        model:
          "You haven't seen the new season yet either and would like to watch it together with other comedy freaks? Then this is the right event for you!",
      },
      meetingPoint: {
        label: "Meeting Point",
        model: "To be decided",
      },
      participants: {
        label: "Number of participants",
        model: "5-10",
      },
    },
    dialogFileChosen: false,
    calendarFocus: "",
    calendarTitle: "",
    fields: [
      "Time",
      "Already registered",
      "Meeting point",
      "Number of participants",
    ],
  }),
  computed: {
    calendarEvents: function() {
      const events = [];
      this.upcomingEvents.forEach((x) => {
        events.push({
          name: x.title,
          start: x.date,
          color: "#e2001a",
        });
      });
      return events;
    },
    upcomingEvents: function() {
      return this.$store.getters.getEvents;
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
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 5px;
}

.event-dialog-container {
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  align-items: center;
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
  margin: 2.5px 0px;
  font-size: 1rem;
  color: black;
}

.event-image {
  width: 150px;
  height: 150px;
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
