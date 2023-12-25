const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.options('*', cors());
const router = require("express").Router();
app.use("/api", 
router.get("/get", async (req, res) => {
    res.send({
        success: true,
        message: "User details fetched successfully",
        
      });
  })
)

const PORT =  5000;
const path = require("path");
__dirname = path.resolve();


// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.listen(5000, () => {
  console.log(`Server started on port 5000`);
});
