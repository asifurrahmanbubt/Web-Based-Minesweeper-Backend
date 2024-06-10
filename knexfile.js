module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',       
      user: 'atef',            
      password: 'atef',        
      database: 'minesweeper', 
      port: 5432               
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
