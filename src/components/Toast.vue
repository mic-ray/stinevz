<template>
  <div id="toast">
    <v-icon class="mr-2" color="yellow">mdi-trophy</v-icon>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    display: function() {
      var toast = document.getElementById("toast");

      toast.className = "show";

      setTimeout(function() {
        toast.className = toast.className.replace("show", "");
      }, 5000);
    },
  },
};
</script>

<style>
#toast {
  visibility: hidden; /* Hidden by default. Visible on click */
  background-color: #0271bf;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  bottom: 70px;
}

#toast.show {
  visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 4.5s;
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 70px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 70px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
