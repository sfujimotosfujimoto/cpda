const Sequelize = require('sequelize');

var connection = new Sequelize('demo_schema', 'root', 'password', {
  dialect: 'sqlite',
  storage: './database.sqlite'
});

var Article = connection.define('article', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    defaultValue: 'Coming soon...'
  }
}, {
  // timestamps: false
});


connection.sync()
  .then(() => {
    Article.create({
      title: 'Hello thersdsdsdfsekdddk',
      body: 'Coming soodsdfsdfdsddn again'
    });

    // Article.findById(1)
    //   .then((article) => {
    //     console.log(article.dataValues);
    //   });
  });
