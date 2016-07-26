// for loop

function findPerson (name, people) {
  for(var i=0; i<people.length; i++){
    if(people[i].name === name) return people[i].hobby;
  }
  return false;
}

// recursion

function findPerson (name, people) {
  var i=0;
  function recurse(item){
    console.log('person', people[i]);
    if(i >= people.length) return false;
    if(people[i].name === name) return people[i].hobby;
    return recurse(people[i+=1]);
  }
  return recurse(people[0]);
}
