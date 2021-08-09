import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    history: [0],
    tasks: [],
  },
  mutations: {
    add(state, payload){
      // state.counter = state.counter + payload
      console.log(payload);
      state.tasks.push(payload);
    },
    removeTask(state, item){
      let index = state.tasks.indexOf(item);
      state.tasks.splice(index, 1);
      // console.log(item);
    }
  },
  actions: {
    // async addTask(context){
    //   let data = await axios.get('https://www.random.org/integers/?num=4&min=1&max=6&col=1&base=10&format=plain&rnd=new');
    //   console.log(data);
    //   context.commit('add', data.data);
    // }
  },
  getters: {

  },
  modules: {
  
  }
})
