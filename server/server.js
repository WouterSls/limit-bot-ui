"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const user_1 = require("./models/user/user");
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.static("build"));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: "simple-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
app.listen(PORT, () => {
    console.log(`server is running on port:  ${PORT}`);
});
app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "express working" });
});
app.get("/login", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "build", "login.html"));
});
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    console.log("user hit login endpoint with credentials: ", email, password);
    const user = user_1.users.find((user) => user.email === email);
    if (user && user.password === password) {
        req.session.user = user;
        console.log("User logged in: ", req.session.user);
        return res.status(200).json({ message: "Login succesful", user });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});
app.use((req, res) => {
    res.status(404).sendFile(path_1.default.join(__dirname, "build", "404.html"));
});
