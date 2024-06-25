"use strict";
function updateUserProfile(user, newInfo) {
    return Object.assign(Object.assign({}, user), newInfo);
}
let user = { name: 'Ali', email: 'oldemail@example.com', phone: '123456789', age: 3 };
user = updateUserProfile(user, { email: 'newemail@example.com' });
console.log(user);
