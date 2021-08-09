<template>
    <div>
        <div a :class="className">
            <button class="close" @click="closeModal()">X</button>

            <div o :class="optionsClass">
                <h5>Do you need options? How many?</h5> 
            </div>

            <div ops :class="opsClass">
                <div in v-for="i in ops" :key="i">
                <input type="checkbox">
                <input type="text" :data-val="i" :placeholder="'Option ' + i + '?'">
                </div>
            </div>

            <div tq :class="titleQuestion">
                <input type="text" placeholder="Do I have a question?" v-model="question">
                <button b @click="sendQuestion()">Add question?</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ChooseOptions',
    data(){
        return {
            titleQuestion: '',
            question: '',
            optionsClass: '',
            opsClass: '',
            ops: '',
        }
    },
    methods: {
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
        }
    }
}
</script>