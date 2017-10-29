var dispatcher = require("../dispatcher");
var userClient = require("../clients/UserCLient");

function UserStore() {
    var listeners = [];

    function login(credentials){
        userCLient.login(credentials).then(function (res) {
            credentials(res);
        });
    }

    function registerUser(userDatas) {
        userClient.register(userDatas).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getSchools(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "user") {
            switch (split[1]) {
                case "login":
                    login(payload.credentials);
                    break;
                case "register":
                    register(payload.userDatas);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = SchoolStore();
