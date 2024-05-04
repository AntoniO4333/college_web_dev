const negr = require('lodash');

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'bred', age: 40 },
  { user: 'rayan gosling', age: 34 }
];

const sortedUsers = negr.sortBy(users, ['age']);
console.log(sortedUsers);
