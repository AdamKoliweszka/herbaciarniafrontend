import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import TeaByEmployee from "./TeaByEmployee.vue";
import CountriesByEmployee from "./CountriesByEmployee.vue";
import TeaSpeciesByEmployee from "./TeaSpeciesByEmployee.vue";
import EditTeaByEmployee from "./EditTeaByEmployee.vue";
import AddTeaByEmployee from "./AddTeaByEmployee.vue";
import ProvidersByEmployee from "./ProvidersByEmployee.vue";

Vue.use(VueRouter);

const routes = [
    {path: "/", component: TeaByEmployee},
    {path: "/pracownik/kraje", component: CountriesByEmployee},
    {path: "/pracownik/gatunki", component: TeaSpeciesByEmployee},
    {path: "/pracownik/dostawcy", component: ProvidersByEmployee},
    {path: "/pracownik/herbaty/:id", component: EditTeaByEmployee},
    {path: "/pracownik/dodawanieHerbaty/", component: AddTeaByEmployee}
];
const router = new VueRouter({
  routes,
  mode:"history"
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
