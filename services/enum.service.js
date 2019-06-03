function routeEnums() {
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

function folderPaths() {
    return {
        activePagePath: './views/pages/',
        inactivePagePath: './inactive-pages/',
    }
}

module.exports = {
    RouteEnums: routeEnums,
    LoginMessages: loginMessages,
    FolderPaths: folderPaths
}
