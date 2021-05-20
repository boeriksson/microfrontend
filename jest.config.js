const base = require("./config/jest.config.base.js")

module.exports = {
    ...base,
    projects:
        [
            "<rootDir>/packages/*/jest.config.js"
        ],
    roots: [
        "<rootDir>"
    ],
    coverageDirectory: "<rootDir>/coverage/",
    /* To have jest transform local deps uncomment this..
    "transformIgnorePatterns": [
        "<rootDir>.*(node_modules)(?!.*local-dependency-package-here.*).*$"
    ]
    */
}