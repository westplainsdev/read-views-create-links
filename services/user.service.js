module.exports = {
  status: "",
  user: {
    userName: "admin",
    password: "admin",
    authenticated: false,
    status: this.status
  },
  validateUser: function(login) {
    console.log("this.user: ", this.user, " and login: ", login);
    if (
      login.username === this.user.userName &&
      login.password === this.user.password
    ) {
      this.user.authenticated = true;
      this.status = "You have successfully signed in.";
      return true;
    } else {
      this.status = "Invalid useranme or password.";
      this.user.authenticated = false;
      return false;
    }
  },
  getUserInfo: function() {
    if (this.user.authenticated) {
      return {
        username: this.user.userName,
        authenticated: this.user.authenticated,
        status: this.status
      };
    }
  },
  logoutUser: function() {
    this.status = "You are now signed out.";
    this.user.authenticated = false;
  }
};
