new Vue({
    el:'#app',
    data:{
        title: 'Two way data binding',
        name: 'Amy',
    },
    methods:{
        updateName(event){

            this.name = event.target.value
        }
    }
})