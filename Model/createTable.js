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
  


knex.schema.createTable('createPost', (table) => {
  table.integer('user_id')
  table.string('post_url')
  table.string('Caption')
  })
  .then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
});




