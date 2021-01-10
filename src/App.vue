<template>
  <p>{{ postTitle }} {{ postDescription }}</p>
  <Popup v-if="showPopup" @post="getPost" @close="togglePopup"/>
  <button @click="emitMsg(); togglePopup()">Emit</button>
</template>

<script>
  import io from "socket.io-client"
  import Popup from "./components/Popup.vue"
  export default {
    name: 'App',
    components: { Popup },
    data() {
      return {
        socket: {},
        showPopup: true,
        postTitle: '',
        postDescription: ''
      }
    },
    created() {
      this.socket = io("http://localhost:8080")
    },
    methods: {
      emitMsg() {
        this.socket.emit("task", "hello")
      },
      getPost(post) {
        this.postTitle = post.title
        this.postDescription = post.description
      },
      togglePopup() {
        this.showPopup = !this.showPopup
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
