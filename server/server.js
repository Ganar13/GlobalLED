const express = require("express");

const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const servicesRouter = require("./routes/servicesRouter");
const galleryRouter = require("./routes/galleryRouter");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/photo", galleryRouter);
app.use("/api/services", servicesRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
