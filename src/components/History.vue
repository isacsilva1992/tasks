<template>
    <div>
        <h2>Tasks</h2>
        <div>
            <p v-for="task in tasks" :key="task.id">{{ task }} | <button class="remove" @click="removeTask()">Remove</button></p>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState(['tasks'])
    },
    methods:{
        ...mapMutations(['removeTask']),
    }
}
</script>

<style>
.remove {
    color:red;
}
</style>