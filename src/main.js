import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesRight, faPeopleGroup, faBeerMugEmpty, faList, faHand, faDownload, faHome, faCloud, faWind, faArrowDown, faTemperature0} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHome, faHand, faAnglesRight, faPeopleGroup, faBeerMugEmpty, faList, faDownload, faCloud, faWind, faArrowDown, faTemperature0)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
