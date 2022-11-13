import bcrypt from 'bcryptjs'
import pkg from 'bcryptjs';
const { hashSync } = pkg;
const users = [
    {
        name : 'Admin',
        email : 'admin@admin.com',
        password : bcrypt.hashSync('12345' , 10),
        isAdmin : true
    },
    {
        name : 'Tushar',
        email : 'tushar@admin.com',
        password : bcrypt.hashSync('12345' , 10),
    },
    {
        name : 'Random',
        email : 'random@admin.com',
        password : bcrypt.hashSync('12345' , 10),
    },
]

export default users