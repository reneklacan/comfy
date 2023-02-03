import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import OrderApp from '@/components/order/App.vue'
import Navbar from '@/components/Navbar.vue'

const googleMapsApiKey = 'AIzaSyDLlOUvgGKezcKsR_OxHN_G8w-bXK4_gn8'

if (document.querySelector('#order-app')) {
  const orderStore = createPinia()
  const orderApp = createApp(OrderApp)
  orderApp.use(orderStore)
  orderApp.use(VueGoogleMaps, {
    load: {
        key: googleMapsApiKey,
        libraries: "places",
    },
  })
  orderApp.mount('#order-app')
}

const navbarApp = createApp(Navbar)
navbarApp.mount('#navbar-app')

// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')

// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'
