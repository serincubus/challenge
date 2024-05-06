module.exports = (sequelize, dataTypes) => {
    let alias = 'BooksAuthors';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      AuthorId: {
        type: dataTypes.STRING,
        allowNull: false
      },
      BookId: {
        type: dataTypes.STRING,
        allowNull:false
      }
    };
    let config = {
      tableName: 'booksauthors',
      timestamps: false
    };
    const BooksAuthors = sequelize.define(alias, cols, config);

  
   BooksAuthors.associate = function (models) {
      BooksAuthors.belongsTo(models.Book, {
        as: 'Book',
        foreingKey: 'BookId',
        timestamps: false
      });
    }

   /* BooksAuthors.associate = function (models) {
        BooksAuthors.belongsTo(models.Author,{
            as:'authors',
            foreingKey:'AuthorId',
            timestamps:false

        })
    }*/
   
  
    return BooksAuthors;
  };