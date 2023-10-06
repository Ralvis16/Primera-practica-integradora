const { connect} = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Base de datos conectada')
        return await connect('mongodb+srv://raniell16:Raniell17@cluster0.sdl1ozr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
    } catch (error) {
            console.log(error)
    }
};

module.exports = { connectDB };