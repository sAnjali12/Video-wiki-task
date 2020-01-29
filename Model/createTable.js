var knex = require("./connection.js");

knex.schema.hasTable('registeration').then(function (exists) {
  if (!exists) {
  return knex.schema.createTable('registeration', (table) => {
    table.increments('id ')
    table.string('username')
    table.string('email')  
    table.string('password')
    }) 
} else {
  console.log('registeration__table ALREADY EXIST!');
   }
})


knex.schema.hasTable('createPost').then(function (exists) {
  if (!exists) {
  return knex.schema.createTable('createPost', (table) => {
      table.increments('post_id')
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('registeration.id')
      table.string('post_url')
      table.string('caption')
    }) 
} else {
  console.log('createPost__table ALREADY EXIST!');
   }
})


knex.schema.hasTable('userLikes').then(function (exists) {
  if (!exists) {
  return knex.schema.createTable('userLikes', (table) => {
    table.increments('id')
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('registeration.id')
    table.integer('post_id').unsigned();
    table.foreign('post_id').references('createPost.post_id')
    table.boolean('likes')
    table.string('comment')
})
} else {
  console.log('userLikes__table ALREADY EXIST!');
   }
})

knex.schema.hasTable('userDetails').then(function (exists) {
  if (!exists) {
  return knex.schema.createTable('userDetails', (table) => {
    table.increments('id')
    table.string('Name')
    table.integer('Birthday')
    table.integer('Mobile')
    table.string('Gender')
    table.string('Location')
    table.string('Education')
    table.string('Experience') 
    
      
})
} else {
  console.log('userDetails__table ALREADY EXIST!');
   }
})


