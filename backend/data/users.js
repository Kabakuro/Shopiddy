import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Henry Geary',
        email: 'henry@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jason Falvey',
        email: 'jason@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users;