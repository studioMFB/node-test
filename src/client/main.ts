import './assets/style/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';


const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');




// import {http} from './../server/main';


// const client = new http.Socket();

// client.connect(process.env.PORT, () => {
//   console.log("Client connected to server on port ", process.env.PORT);

//   client.write("Client say Bonjour!");
// });

// client.on("data", (data: any) => {
//   console.log("Client recieved data from server ", data);
// });

// client.on('close', () => {
//     console.log('Client connection closed.');
// });

// client.error('error', (error:Error)=>{
//     console.log('Client connection error ', error);
// });