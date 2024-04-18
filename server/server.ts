import epxress from "express";
import session from "express-session";
import path from "path";
import { User, users } from "./models/user/user";

const PORT = process.env.PORT || 8080;

const app = epxress();

app.use(epxress.static("build"));
app.use(epxress.json());
app.use(
  session({
    secret: "simple-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.listen(PORT, () => {
  console.log(`server is running on port:  ${PORT}`);
});

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "express working" });
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "login.html"));
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log("user hit login endpoint with credentials: ", email, password);

  const user = users.find((user: User) => user.email === email);

  if (user && user.password === password) {
    req.session.user = user;
    console.log("User logged in: ", req.session.user);
    return res.status(200).json({ message: "Login succesful", user });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "build", "404.html"));
});
