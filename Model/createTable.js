var knex = require("./connection.js");

// knex.schema.createTable('registeration', (table) => {
//     table.increments('id ')
//     table.string('username')
//     table.string('email')  
//     table.string('password')
//   })
//   .then(() => console.log("table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
// });
  


// knex.schema.createTable('createPost', (table) => {
//   table.increments('id')
//   table.string('post')
//   })
// .then(() => console.log("table created"))
//   .catch((err) => { console.log(err); throw err })
//   .finally(() => {
//       knex.destroy();
// });


knex.schema.createTable('user_likes', (table) => {
  table.increments('id')
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('registeration.id')
  table.integer('post_id').unsigned();
  table.foreign('post_id').references('createPost.post_id')
  table.boolean('likes')
  table.string('comment')
})
  .then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
});

