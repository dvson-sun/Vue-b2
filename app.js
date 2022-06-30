 const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this course and learn Vue!',
            vueLink: 'http://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal = '[' + randomNumber + '] - Learn Vue!';
            } else {
                return this.courseGoal = '[' + randomNumber + '] - Learn PHP!';
            }
        }
    }
});

app.mount('#user-goal');