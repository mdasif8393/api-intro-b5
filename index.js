const user = {id: 11, name: 'Gorib AMir', job: 'Actor'};
const stringify = JSON.stringify(user);
console.log(stringify);

const converted = JSON.parse(stringify);
console.log(converted);