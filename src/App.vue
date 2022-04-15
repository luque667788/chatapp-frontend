<template>
  <div id="app">
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        <div class="col-md-8 col-xl-6 chat">
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight justify-content-center">Chat</div>
            </div>
            <div class="card-body msg_card_body">
              <div
                v-for="(message, key) in messages"
                :key="key"
                class="d-flex justify-content-start mb-4"
              >
                <div class="msg_cotainer">
                  {{ message.content }}
                  <span class="msg_time"></span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <textarea
                  v-model="newMessage"
                  name=""
                  class="form-control type_msg"
                  placeholder="Type your message..."
                  v-on:keyup.enter.exact="sendMessage"
                ></textarea>
                <div class="input-group-append">
                  <span
                    class="input-group-text send_btn"
                    v-on:click="sendMessage"
                    >></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      connection: null,
      messages: [{ name: "Taro", age: 30, content: "Tokyo" }],
      newMessage: "",
    };
  },
  methods: {
    sendMessage: function () {
      console.log(this.connection);
      let msg = {
        content: this.newMessage,
      };
      let message = JSON.stringify(msg);
      this.connection.send(message);
      this.newMessage = "";
    },
  },
  created: function () {
    //runs when app starts
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onmessage = function (event) {
      console.log(event);
      let data = JSON.parse(event.data);
      this.messages.push(data);
    };

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
    };
  },
};
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
