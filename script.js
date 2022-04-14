let user = prompt("write users");

let arrOfUsers = user.split(", ");

for(let i = 0; i < arrOfUsers.length; i++){
    console.log(`<li>${i+1} ${arrOfUsers[i]} </li>`);
}
