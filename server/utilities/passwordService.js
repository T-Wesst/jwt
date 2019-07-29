const bcrypt = require('bcrypt');
const saltRounds = process.env.SALTROUNDS || 10;

module.exports = {
  hashPassword: async myPlaintTextPassword => {
    try {
      let hashed = await bcrypt.hash(myPlaintTextPassword, saltRounds);
      return hashed;
    } catch (err) {
      if (err) throw err;
    }
  },
  checkPassword: async (myPlaintTextPassword, hash) => {
    try {
      let matched = await bcrypt.compare(myPlaintTextPassword, hash);
      return matched;
    } catch (err) {
      if (err) throw err;
    }
  }
};
