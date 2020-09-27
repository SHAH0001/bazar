export default {
    methods: {
        getImage(path) {
            return require('../assets/images/' + path);
        }
    }
}