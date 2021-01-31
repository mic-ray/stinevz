<template>
  <div>
    <h2 class="heading">Upcoming events</h2>
    <body>
      <div class="container">
        <div class="events">
          <div class="events__header">
            <div class="events__header-text heading__primary">
              Upcoming Events
            </div>
            <form class="events__header-search">
              <input type="text" class="events__header-input" />
            </form>
          </div>
          <div class="events__event">
            <div class="event__content">
              <div class="event__heading">20th of January: Game night</div>
              <div class="event__discription">
                <span>Number of participants: 4-10</span>
                <span>Already registered: 3</span>
                <span>When: 19:00</span>
                <span
                  >Access via/ Meeting Point:
                  <a href="#"
                    >https://uni-hamburg.zoom.us/j/98450191228?
                    pwd=VmNLVVF0OEFuZGhmbksxRFgzU1Fqdz09</a
                  ></span
                >
                <span>Need for registration: Yes</span>
              </div>
            </div>
            <div class="event__img">
              <img
                src="../assets/people.png"
                alt="img-people"
                class="event__img-image"
              />
            </div>
          </div>
          <div class="events__event">
            <div class="event__content">
              <div class="event__heading">
                22nd of January: Beer Pong Tournament
              </div>
              <div class="event__discription">
                <span>Number of participants: as many as possible</span>
                <span>Already registered: 10</span>
                <span>When: 18:00</span>
                <span
                  >Access via/ Meeting Point:
                  <a href="#">https://goo.gl/maps/69mPwyyAymk56CFm8</a></span
                >
                <span>Need for registration: No</span>
              </div>
            </div>
            <div class="event__img">
              <img src="../assets/beer.png" alt="img-beer" class="event__img-image" />
            </div>
          </div>
        </div>
        <div class="times">
          <div class="times__date">
            <div class="container-calendar">
              <div class="button-container-calendar">
                <button id="previous">&#8249;</button>
                <button id="next">&#8250;</button>
                <h3 id="monthHeader"></h3>
                <p id="yearHeader"></p>
              </div>

              <table class="table-calendar" id="calendar">
                <thead id="thead-month"></thead>
                <tbody id="calendar-body"></tbody>
              </table>

              <div class="footer-container-calendar">
                <label for="month">Jump To: </label>
                <select id="month">
                  <option value="0">Jan</option>
                  <option value="1">Feb</option>
                  <option value="2">Mar</option>
                  <option value="3">Apr</option>
                  <option value="4">May</option>
                  <option value="5">Jun</option>
                  <option value="6">Jul</option>
                  <option value="7">Aug</option>
                  <option value="8">Sep</option>
                  <option value="9">Oct</option>
                  <option value="10">Nov</option>
                  <option value="11">Dec</option>
                </select>
                <select id="year"></select>
              </div>
            </div>
          </div>

          <div class="times__throwback">
            <div class="throwback__heading heading__primary">Throwbacks</div>
            <div class="throwback__btn" id="throwback__btn">Create Event</div>
          </div>
          <div class="times__info">
            <div class="times__info-heading">20th December: Bake Biscuits</div>
            <div class="times__info-description">
              <span>Number of participants: 7</span>
              <span>When: 19:00</span>
            </div>
            <div class="times__gallery">
              <img
                src="../assets/christmas.png"
                alt="img-christmas"
                class="times__gallaery-img-1"
              />
              <img
                src="../assets/santa.png"
                alt="img-santa"
                class="times__gallaery-img-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="popup" id="popup">
        <div class="popup__content" id="popup__content">
          <div class="popup__event">
            <div class="popup__event-heading">My Event</div>
            <div class="popup__btn-upload">
              <i class="fas fa-upload"></i>
              <span>Upload</span>
            </div>
          </div>

          <div class="popup__daypicker">
            <div class="popup__daypicker-heading">Choose a day:</div>
            <div class="popup__daypicker-calendar">
              <div class="container-calendar--2">
                <div class="button-container-calendar--2">
                  <button id="previous--2">&#8249;</button>
                  <button id="next--2">&#8250;</button>
                  <h3 id="monthHeader--2"></h3>
                  <p id="yearHeader--2"></p>
                </div>

                <table class="table-calendar--2" id="calendar--2">
                  <thead id="thead-month--2"></thead>
                  <tbody id="calendar-body--2"></tbody>
                </table>

                <div class="footer-container-calendar--2">
                  <label for="month--2">Jump To: </label>
                  <select id="month--2">
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2">Mar</option>
                    <option value="3">Apr</option>
                    <option value="4">May</option>
                    <option value="5">Jun</option>
                    <option value="6">Jul</option>
                    <option value="7">Aug</option>
                    <option value="8">Sep</option>
                    <option value="9">Oct</option>
                    <option value="10">Nov</option>
                    <option value="11">Dec</option>
                  </select>
                  <select id="year--2"></select>
                </div>
              </div>
            </div>
          </div>
          <div class="popup__description">
            <div>
              <span class="popup__description-heading">Title</span>:&nbsp;<span
                >Netflix Party - Brooklyn 99</span
              >
            </div>
            <div>
              <span class="popup__description-heading"
                >Number of Participants</span
              >:&nbsp;<span>5-10</span>
            </div>
            <div>
              <span class="popup__description-heading">When</span>:&nbsp;<span
                >20:00</span
              >
            </div>
            <div>
              <span class="popup__description-heading"
                >Access via/ Meeting Point</span
              >:&nbsp;<span>tbc</span>
            </div>
            <div>
              <span class="popup__description-heading"
                >Need for registration</span
              >:&nbsp;<span>Yes</span>
            </div>
            <div>
              <span class="popup__description-heading">Description</span
              >:&nbsp;<span
                >You haven't seen the new season yet either and would like to
                watch it together with other comedy freaks? Then this is the
                right event for you!</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- <script type="text/javascript" src="vendor/js/date-picker.js"></script> -->
      <!-- <script type="text/javascript" src="vendor/js/date-picker-2.js"></script> -->
    </body>
  </div>
</template>

<script>
export default {
  name: "Event",
  components: {},
};
</script>
<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: inherit;
  font-family: "Lato", sans-serif;
  font-size: 62.5%;
}

a {
  text-decoration: none;
  color: #000000;
}

/* ::-webkit-datetime-edit {
    padding: 1rem;
} */

input[type="date"] {
  padding: 1rem;
  font-family: inherit;
}

.container {
  display: flex;
  width: 90vw;
  /* background-color: red; */
  margin: 6rem auto;
}

.events {
  width: 60%;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
}

.events__header {
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.heading__primary {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0271bb;
  padding: 1rem;
}

.events__header-search {
  /* padding: 1rem; */
  width: 20rem;
}

.events__header-input {
  height: 4rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #3b515b;
  border-radius: 5px;
}

.events__event {
  font-size: 2rem;
  border: 1px solid rgba(59, 81, 91, 0.2);
  padding: 1rem;
  border-radius: 5px;
  display: flex;
}

.event__content {
  max-width: 50%;
  margin-right: auto;
}

.event__heading {
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0271bb;
}

.event__discription {
  display: flex;
  flex-direction: column;
}

.event__discription > *:not(:last-child) {
  margin-bottom: 0.2rem;
}

.event__discription > :last-child {
  margin-bottom: 6rem;
}

.event__img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
}

.times {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.event__img-image {
  height: 15rem;
  width: 15rem;
}

.times__throwback {
  display: flex;
  justify-content: space-between;
}

.throwback__btn {
  display: flex;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 10rem;
  width: 20rem;
  overflow: hidden;
  font-size: 2rem;
  height: 5rem;
  padding-right: 2rem;
  cursor: pointer;
}

.throwback__btn::before {
  height: 5rem;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f067";
  background-color: red;
  color: #fff;
  line-height: 2.5;
  text-align: center;
  width: 5rem;
  border-right: 2px solid #000000;
  margin-right: 1rem;
}

.throwback__btn-icon {
  font-size: 2rem;
  color: #fff;
  margin-right: 3px;
  background-color: #e2001a;
  padding: 1rem;
  border-radius: 10rem 0 0 10rem;
  border-right: 2px solid #000000;
}

.throwback__btn-text {
  font-size: 1.5rem;
  width: 10rem;
}

.times__info {
  border: 2px solid rgba(59, 81, 91, 0.2);
  padding: 1rem;
  width: 41rem;
}

.times__info-heading {
  font-size: 1.7rem;
  font-weight: 500;
  color: #0271bb;
  margin-bottom: 0.3rem;
}

.times__info-description {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.times__gallaery-img-1 {
  height: 12rem;
  width: 12rem;
}

.times__gallaery-img-2 {
  height: 12rem;
  width: 26rem;
}

.popup {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  border: 1px solid #000000;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s 0.2s;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

/* .popup:target {
  opacity: 1;
  visibility: visible;
} */

/* .popup:target .popup__content {
  transform:translate(-50%, -50%) scale(1);
} */

.popup__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 5rem 8rem;
  justify-content: space-between;
  height: 80%;
  width: 30%;
  background-color: #fff;
}

.popup__event {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__event-heading,
.popup__daypicker-heading {
  font-size: 1.5rem;
  color: #0271bb;
  font-weight: 700;
}

.popup__btn-upload {
  background-color: #e2001a;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.popup__btn-upload i {
  margin-right: 1rem;
}

.popup__daypicker {
  display: flex;
  flex-direction: column;
}

.popup__description {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
}

.popup__description > *:not(:last-child) {
  margin-bottom: 1rem;
}

.popup__description-heading {
  font-weight: 900;
}

#monthHeader--2 {
  text-transform: uppercase;
  color: #999;
  margin: 0;
  font-size: 10pt;
}

#yearHeader--2 {
  margin: 0 0 10px;
  padding: 0 3px;
  font-size: 8pt;
  color: #999;
}

.button-container-calendar--2 button {
  position: relative;
  cursor: pointer;
  display: inline-block;
  zoom: 1;
  background: #e2001a;
  color: #fff;
  border: 1px solid #0aa2b5;
  border-radius: 4px;
  padding: 5px 10px;
  top: 10px;
  outline: none;
}

.table-calendar--2 td {
  padding: 5px;
  text-align: center;
  vertical-align: top;
}
</style>
