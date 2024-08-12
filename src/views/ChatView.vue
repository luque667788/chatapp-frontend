<template>
  <div>
    <div class="">
      <div class="">
        <div class="flex h-screen">
          <!-- Left -->
          <div class="w-1/3 flex flex-col border-2">
            <div class="text-xl">{{ this.username }}</div>

            <!-- Contacts -->
            <div class="bg-gray flex-1 overflow-auto">
              <div v-for="(_user, index) in chats" :key="index">
                <chat-item :isactive="index == activechatindex" :user="_user"
                  v-on:click="this.activechatindex = index" />
              </div>
            </div>
          </div>

          <!-- Right -->
          <div class="w-2/3 flex flex-col" v-if="chats[activechatindex] != null">
            <!-- Header -->
            <div class="
                py-2
                px-3
                bg-grey-lighter
                flex flex-row
                justify-between
                items-center
              ">
              <div class="flex items-center">
                <div>
                  <img class="w-10 h-10 rounded-full"
                    src="data:image/png;base64,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" />
                </div>
                <div class="ml-4">
                  <p class="text-grey-darkest">
                    {{ this.chats[activechatindex].username }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Messages -->
            <div class="flex-1 h-full overflow-y-scroll" ref="scrollable">
              <message-item v-for="(item, index) in chats[activechatindex].messages" :key="index"
                :sent="this.username == item.user" :msg="item" />
            </div>
            <!-- Input -->
            <div class="bg-grey-lighter px-4 py-4 flex items-center" ref="scrolltome">
              <input type="text" class="w-full justify-start border rounded px-4 py-4" v-on:keyup.enter="sendMessage"
                placeholder="Insira sua mensagem" v-model="NewMessage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";

import ChatItem from "@/components/chatitem.vue";
import MessageItem from "@/components/message.vue";
export default {
  name: "ChatView",
  data: function () {
    return {
      connection: null,
      chats: [],
      activechatindex: 0,
      username: "not defined",
      password: "not defined",
      NewMessage: "",
      port: "3qfadf",
    };
  },
  beforeRouteEnter() {
    if (
      useUserStore().username == "anonimous" ||
      useUserStore().password == "anonimous"
    ) {
      return "/login";
    }
  },

  computed: {
    ...mapStores(useUserStore),
  },
  components: {
    "chat-item": ChatItem,
    "message-item": MessageItem,
  },
  methods: {
    scrollToBottom: function () {
      const container = this.$refs.scrollable;
      this.$nextTick(() => {
        container.scrollTop = container.scrollHeight;
      });
    },
    sendMessage: function () {
      console.log("sending message" + this.NewMessage);
      let msg = {
        type: 1,
        user: this.username,
        content: this.NewMessage,
        destinatary: this.chats[this.activechatindex].username,
        time: this.getDateTime(),
      };
      let message = JSON.stringify(msg);
      this.connection.send(message);
      this.NewMessage = "";
    },
    receiveMessage: function (event) {
      let data = JSON.parse(event.data);
      /*
      type 1 == normal message 
      type 2 == message indicating username
      type 3 == message from server broadcasting available users
      type 4 == message from server indicating error
      */
      switch (data.type) {
        case 1:
          console.log("received message from " + data.user);
          for (let i = 0; i < this.chats.length; i++) {
            if (this.chats[i].username == data.user) {
              this.chats[i].messages.push(data);
              this.scrollToBottom();
              return;
            } else if (data.user == this.username) {
              if (data.destinatary == this.chats[i].username) {
                this.chats[i].messages.push(data);
                this.scrollToBottom();
                return;
              }
            }
          }
          console.log("message from a user that is not in the list");
          if (data.user != this.username) {
            let newUser = {
              username: data.user,
              messages: [],
            };
            newUser.messages.push(data);
            this.chats.push(newUser);
          }
          else{
            let newUser = {
              username: data.destinatary,
              messages: [],
            };
            newUser.messages.push(data);
            this.chats.push(newUser);
          }
          console.log("added new user temporarly: " + data.user);

          break;
        case 3: // update user list
          for (let i = 0; i < data.allusers.length; i++) {
            if (data.allusers[i] != this.username) {
              let exist = false;
              for (let ii = 0; ii < this.chats.length; ii++) {
                if (this.chats[ii].username == data.allusers[i]) {
                  //already is in the front-end chat list
                  exist = true;
                }
              }
              if (exist == false) {
                let newUser = {
                  username: data.allusers[i],
                  messages: [],
                };

                this.chats.push(newUser);
                console.log("added new user: " + data.allusers[i]);
              }
            } else {
              console.log(
                "You are successfuly registered as new user to the server"
              );
            }
          }

          var filtered = this.chats.filter((value) =>
            data.allusers.includes(value.username)
          );
          this.chats = filtered;
          break;
        case 4: // message from server
          console.log("received ERROR message from server");
          this.userStore.errormsg = data.content;
          break;
      }

    },
    getDateTime: function () {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      return time;
    },
  },
  mounted: function () {
    //runs when app starts after login
    console.log("Starting connection to WebSocket Server");
    const host = process.env.VUE_APP_BACKEND_URL;
    console.log("host: " + host);
    this.connection = new WebSocket("ws://" + host + ":" + this.port + "/ws");
    this.connection.onmessage = (event) => {
      this.receiveMessage(event);
    };
    // sends the login details as first websocket message to the server as authentication
    this.connection.onopen = () => {
      console.log("Successfully connected to the websocket server...");
      let msg = {
        type: 2,
        username: this.username,
        password: this.password,
      };
      let message = JSON.stringify(msg);
      this.connection.send(message);
    };
  },
  created() {
    this.username = this.userStore.username;
    this.password = this.userStore.password;
    this.port = this.userStore.port;
    document.title = this.username;
  },
};
</script>
