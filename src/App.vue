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
                  {{ message.body }}
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
    this.connection = new WebSocket("ws://localhost:8081/ws");

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
  background: -webkit-linear-gradient(to right, #560a86, #7122fa, #560a86);
  background: linear-gradient(to right, #0a8621, #9894a0, #cc681b);
}

#app {
  height: 100%;
}

.chat {
  margin-top: auto;
  margin-bottom: auto;
}
.card {
  height: 500px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.msg_head {
  color: #fff;
  text-align: center;
  font-size: 26px;
}

.msg_card_body {
  overflow-y: auto;
}
.card-header {
  border-radius: 15px 15px 0 0;
  border-bottom: 0;
}
.card-footer {
  border-radius: 0 0 15px 15px;
  border-top: 0;
}
.container {
  align-content: center;
}

.type_msg {
  background-color: rgba(86, 10, 134, 0.6);
  border: 0;
  color: white;
  height: 60px;
  overflow-y: auto;
}
.type_msg:focus {
  box-shadow: none;
  outline: 0px;
  background-color: rgba(255, 255, 255, 0.6);
}

.send_btn {
  border-radius: 0 15px 15px 0;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
  color: white;
  cursor: pointer;
}

.msg_cotainer {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.msg_cotainer_send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #75d5fd;
  padding: 10px;
  position: relative;
}

.msg_head {
  position: relative;
}
</style>
