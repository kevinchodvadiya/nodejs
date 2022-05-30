const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const User = require("./user");
const port = 3000;

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kevin1233:8B951rhLLGb9bS6T@cluster0.8ifcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.get("/all", async (req, res) => {
  try {
    User.find({}, (error, data) => {
      if (!error) {
        res.send(data);
      } else {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/:name", async (req, res) => {
  try {
    const user = await User.findOne({name: req.params.name});

    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone_num: req.body.phone_num,
      image_url: req.body.image_url,
    });
    const result = await user.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone_num: req.body.phone_num,
      image_url: req.body.image_url,
    };
    User.findByIdAndUpdate(
      req.params.id,
      {$set: data},
      {new: true},
      (error, data) => {
        if (!error) {
          res.json({message: "Updated User Successfully", Updated_user: data});
        } else {
          console.log(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (!error) {
      res.json({message: "Delete User Successfully", Deleted_user: data});
    } else {
      console.log(error);
    }
  });
});

app.listen(port, function (error) {
  if (error) {
    console.log("Something Went Wrong ", error);
  } else {
    console.log(`server running on ${port}`);
  }
});
