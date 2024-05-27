const User = require("../models/User");
const path = require("path");
const chalk = require("chalk");

const basePath = path.join(__dirname, "../views/users");

module.exports = class UserController {
  static pageInsertUser(req, res) {
    res.sendFile(`${basePath}/pageInsertUser.html`);
  }

  static pageDeleteUser(req, res) {
    res.sendFile(`${basePath}/pageDeleteUser.html`);
  }

  static pageUpdateDataUser(req, res) {
    res.sendFile(`${basePath}/pageUpdateDataUser.html`);
  }

  static selectionAllUsers(req, res) {
    const users = User.findAll({ raw: true });
    users.then((answer) => {
      console.log(answer);
    });
    res.redirect("/");
  }

  static createUser(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    User.create(user);
    res.redirect("/users/page_insert_user");
  }

  static deleteUser(req, res) {
    const name = req.body.name;

    const userDelete = User.destroy({ where: { name: name } });

    userDelete.then((answer) => {
      if (answer > 0) {
        console.log(chalk.blue.bgGreen("Os dados foram apagados!"));
        res.redirect("/");
      } else {
        console.log(
          chalk.red.bgBlack("Dados não existente no banco de dados!")
        );
        res.redirect("/");
      }
    });
  }

  static updateDataUser(req, res) {
    const nameUpdate = req.body.nameUpdate;
    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    const updateUser = User.update(user, { where: { name: nameUpdate } });

    updateUser.then((answer) => {
      if (answer.length > 0) {
        console.log(chalk.blue.bgGreen("Dados atualizados!"));
        res.redirect("/users/page_update_user");
      } else {
        console.log(
          chalk.red.bgBlack("Dados não existente no banco de dados!")
        );
        res.redirect("/users/page_update_user");
      }
    });
  }
};
