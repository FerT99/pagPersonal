const path = require("path");
const homepage = require("../models/home");

homepage = (request, response, next) => {
    return response.render(path.join("home", "homeP"))
};

module.exports = {
    homepage,
}