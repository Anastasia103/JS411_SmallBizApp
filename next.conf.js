import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

module.exports = {
    env: {
        REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
        HELLO_CAT: process.env.HELLO_CAT
    },
};