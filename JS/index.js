Vue.createApp({
    data() {
        return {
            name: null,
            names: [],
            message: null

        }
    },
    methods: {
        addTo(name){
            this.names = []
            this.names.push(this.name)
            this.names.push(this.name.toUpperCase())
            this.names.push(this.name.toLowerCase())
        }

    }


}).mount("#app")