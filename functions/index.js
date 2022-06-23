const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const { api } = require("./api"); // import {api} from "./api"

// Setup das functions (cloud)
exports.api = functions.https.onRequest(api);