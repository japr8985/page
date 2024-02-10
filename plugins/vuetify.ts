import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import type { VuetifyOptions } from 'vuetify';

const options : VuetifyOptions = {
  theme: {
    themes: {
      dark: {
        colors: {
          // primary: '#A1D2B4',
          // info: '#005B97',
          // background: '#FFFFFF',
        }
      }
    }
  }
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify(options)
  app.vueApp.use(vuetify);
});