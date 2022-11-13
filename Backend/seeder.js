const mongoose = require('mongoose')
import dotenv from 'dotenv'
import users from "./Data/users.js";
import products from "./Data/Products.js";
import User from "./Models/Users.js";
import Product from "./Models/ProductsList.js";
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async() => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        const createdUser = await User.insertMany(users)

        const adminUser = createdUser[0]._id

        const sampleProducts = products.map((p) => {
            return {...p,user: adminUser}
        })

        await Product.insertMany(sampleProducts);

        console.log("data Imported")
        process.exit()
    } catch (error) {
        console.error(error.message)
        process.exit(1);
        
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        
        console.log("data destroyed")
        process.exit()
    } catch (error) {
        console.error(error.message)
        process.exit(1);

    }
}

if (process.argv[2] === '-i')
{
    importData()
}
else {
    destroyData()
}
