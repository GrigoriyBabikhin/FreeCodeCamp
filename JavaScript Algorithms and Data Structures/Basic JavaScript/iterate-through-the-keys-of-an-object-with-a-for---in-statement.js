const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let onlaneUser = 0;

  for (let user in allUsers){
  let onlaneStatus = allUsers[user]["online"];
  if(onlaneStatus) {
    onlaneUser += 1;
   }
  }
   return onlaneUser;
  // Only change code above this line
}

console.log(countOnline(users));