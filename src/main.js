import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'

// make sure u run these incase it still doesnt work 
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons

library.add(faUserSecret)

import './assets/main.css'
import { faFacebookF, faInstagram, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
