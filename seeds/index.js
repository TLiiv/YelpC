const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/yelp-camp');
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDb = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20)+10;
        const camp = new Campground({
            //your user id!praegu colti oma
            author: '633da48c5720513f68c47d23',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dynwakdvj/image/upload/v1666462003/YelpCamp/o8gywslttgfclumevzsc.jpg',
                    filename: 'YelpCamp/o8gywslttgfclumevzsc'
                },
                {
                    url:"https://res.cloudinary.com/dynwakdvj/image/upload/v1665679755/YelpCamp/jkho7nnc8y2qaymicjne.jpg",
                    filename: 'YelpCamp/jkho7nnc8y2qaymicjne'
                }
            ]
        })
        await camp.save();
    }
}

seedDb().then(()=> {
    mongoose.connection.close();
});
