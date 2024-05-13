const mongoose = require('mongoose');

async function mongoCon() {

    mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected...!!!")).catch(err => console.error('could not connected...'))
}

module.exports = mongoCon;