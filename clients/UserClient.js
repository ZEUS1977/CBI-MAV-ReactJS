var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/api/user";
//register post with all data
//login get with email or user and password
module.exports = {
    register: function (userDatas) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(userDatas),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    login: function (credentials) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(credentials),
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}
