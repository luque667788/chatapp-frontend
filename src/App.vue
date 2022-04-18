<template>
  <div id="app">
    <div class="msg_head">
      <div class="">Chat</div>
    </div>
    <div class="msgs-area">
      <div v-for="(message, key) in messages" :key="key">
        <div class="msg">
          {{ message.body }}
          <span class="msg_time"></span>
        </div>
      </div>
    </div>
    <div class="InputArea">
      <textarea
        v-model="newMessage"
        name=""
        class="textinput"
        placeholder="Type your message..."
        v-on:keyup.enter.exact="sendMessage"
      ></textarea>
      <span class="send_btn" v-on:click="sendMessage">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      connection: null,
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    sendMessage: function () {
      console.log(this.newMessage);
      let msg = {
        body: this.newMessage,
      };
      let message = JSON.stringify(msg);
      this.connection.send(message);
      this.newMessage = "";
    },
    receiveMessage: function (event) {
      let data = JSON.parse(event.data);
      console.log(data.body);
      this.messages.push(data);
    },
  },
  mounted: function () {
    //runs when app starts
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("ws://localhost:3030/ws");

    this.connection.onmessage = (event) => {
      this.receiveMessage(event);
    };

    this.connection.onopen = () => {
      console.log("Successfully connected to the echo websocket server...");
    };
  },
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
  background: #0310ea;
  background: -webkit-linear-gradient(to right, #ffffff, #f7f7f7, #f5f5f5);
  background: linear-gradient(to right, #ffffff, #ffffff, #ffffff);
}

#app {
  height: 100%;
}

.msg_head {
  /*color: #fff;*/
  text-align: center;
  font-size: 26px;
}

.InputArea {
  position: sticky;
  top: 840px;
  height: 70px;
}
.textinput {
  font-size: 200%;
  vertical-align: middle;
  background-color: rgba(151, 151, 151, 0.6);
  border: 0;
  width: 90%;
  color: white;
  height: 60px;
  margin-left: 10px;
  border-radius: 10px 0px 0px 20px;
}

.send_btn {
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  vertical-align: middle;
  border-radius: 0px 10px 10px 0px;
  padding: 21px;
  background-color: rgba(27, 225, 27, 0.3);
  color: rgb(17, 212, 30);
  cursor: pointer;
}

.msg {
  margin-top: 1%;
  margin-left: 10px;
  border-radius: 20px 20px 20px 60px;
  background-color: #82ccdd;
  padding: 10px;
}
</style>
