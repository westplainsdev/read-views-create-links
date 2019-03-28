function routeEnums(){

    return {
        unknown: "unknown"
      }
}

function loginMessages() {
    return {
        success: "Login successful.",
        failure: "Invalid login attempt."
    }
}

module.exports = {
    RouteEnums: routeEnums,
    LoginMessages: loginMessages
}