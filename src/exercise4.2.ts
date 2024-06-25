// 4
interface User {
    name: string;
    email: string;
    phone: string;
    age: number;
}

function updateUserProfile(user: User, newInfo: Partial<User>): User {
    return { ...user, ...newInfo };
}

let user: User = { name: 'Ali', email: 'oldemail@example.com', phone: '123456789', age: 3 };
user = updateUserProfile(user, { email: 'newemail@example.com' });
console.log(user);