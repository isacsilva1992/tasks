<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <!-- TODO LIST | TASK LIST -->

    <!-- <div class="counter"></div>
    <input type="text" v-model="value">
    <button @click="add(value)">ADD TASK!</button>
    
    <hr>

    <History /> -->

    <hr>

    <h2>This is a question APP?</h2>
    <button @click="openModal()">Add Question?</button>

    <div a :class="className">
      <button class="close" @click="closeModal()">X</button>

      <div o :class="optionsClass">
        <h5>Do you need options? How many?</h5>
        
        <ul op>
          <li @click="question2(2)">2 Options?</li>
          <li @click="question3(3)">3 Options?</li>
          <li @click="question4(4)">4 Options?</li>
        </ul>

      </div>

      <div ops :class="opsClass">
        <h5>What you think about fill theese options?</h5>
        <div in v-for="i in ops" :key="i">
          <input type="hidden" :value="ch">
          <input type="checkbox" @click="checks(i)" checked>
          <input type="text" :data-val="i" v-model="questionsArray.options[i - 1]" :placeholder="'Option ' + i + '?'">
        </div>
        <div v-for='i in ops' :key="i">
          <b>OPÇÃO {{i}} :  </b>  {{ questionsArray.options[i - 1] }} |
          <b>Check {{i}} :  </b> {{ questionsArray.checks[i - 1] }}
        </div>
        <hr>
        {{ questionsArray }}
      </div>

      <div tq :class="titleQuestion">
        <input type="text" placeholder="Do I have a question?" v-model="question">
        <button b @click="sendQuestion()">Add question?</button>
      </div>

    </div>

  </div>
</template>

<script>
import History from '@/components/History.vue'
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      className: '',
      titleQuestion: '',
      question: '',
      ch: 0,
      questionsArray: {
        options: [],
        checks:[]
      },
      optionsClass: '',
      opsClass: '',
      ops: '',
    }
  },
  computed: {
    ...mapState(['task'])
  },
  methods: {
    ...mapMutations(['add']),
    openModal(){
      this.className = 'active';
      this.optionsClass = 'active';
    },
    closeModal(){
      this.className = '';
      this.optionsClass = '';
    },
    question2(val){
      this.optionsClass = '';
      this.opsClass = 'active';
      this.ops = val;
      console.log(val);
    },
    question3(val){
      this.optionsClass = '';
      this.opsClass = 'active';
      this.ops = val;
      console.log(val);
    },
    question4(val){
      this.optionsClass = '';
      this.opsClass = 'active';
      this.ops = val;
      console.log(val);
    },
    sendQuestion(){
      confirm('Are you sure?');
      console.log('SEND Question: '+ this.question);
    },
    checks(value){
      this.questionsArray.checks[value - 1] = 1;
      // console.log(value);
    }
  },
  components: {
    History
  }

}
</script>
<style>
[a]{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100vh;
  background:rgba(0,0,0,0.85);
  flex-direction: column;
  align-content: center;
  justify-content: center;
  display:none;
  color:#fff;
}
[a].active {
  display:flex;
}
[tq]{
  display:none;
}
[tq].active {
  display:flex;
}
[b] {
  background:#2ba;
  border:none;
  margin:10px auto;
  width:100%;
  max-width:200px;
  border-radius:5px;
  padding:15px;
  color:#fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}
[o] {
    display: flex;
    list-style: none;
    flex-direction: column;
    text-transform: uppercase;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition:all ease 0.5s;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    position:relative;
    top:-20px;
}
[o].active {
  top:0;
  visibility: visible;
  opacity: 1;
}
[op] {
  display: flex;
    list-style: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    padding: 0;
}
[op] li {
  margin:0 5px;
  border-radius:5px;
  background:#2ba;
  color:#fff;
  padding:15px;
  transition:all ease 0.3s;
  cursor:pointer;
}
[op] li:hover {
  background:rgb(12, 114, 102);
}
[ops]{
  display: none;
  list-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  justify-content: center;
  align-items: center;
  padding: 0;
  width:100%;
  max-width: 600px;
  margin:0 auto;
  flex-direction: column;
}
[ops].active {
  top:0;
  visibility: visible;
  opacity: 1;
  display:flex;
}
input[type="checkbox"] {
    width: 50px;
    margin-right: 5px;
}
[in] {
  margin: 10px;
  display:flex;
}
[in] input {
    padding: 0;
}
input {
  margin:0 auto;
  max-width:320px;
  width:100%;
  height:40px;
  background:rgba(255,255,255,0.85);
  border:none;
  border-radius:7px;
  padding:10px;
  font-size:20px;
  border:2px solid #ccc;
}
.close {
  position:absolute;
  right:10%;
  top:5%;
  font-size:5em;
  color:#fff;
  font-weight:900;
  background:transparent;
  border:none;
}
</style>