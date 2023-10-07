const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/VsCode", function (req, res) {
  res.render("index", {
    folderpath: __dirname,
    foldername: __dirname.split("\\").pop(),
  });
});

app.get("/VsCode/files", function (req, res) {
  fs.readdir("./uploads", function (err, data) {
    if (err) throw err;
    else {
      res.render("files", {
        files: data,
        folderpath: __dirname,
        foldername: __dirname.split("\\").pop(),
      });
    }
  });
});

app.get("/VsCode/files/:filename", function (req, res) {
  fs.readdir("./uploads", function (err, files) {
    if (err) throw err;
    else {
      fs.readFile( path.join("./uploads", req.params.filename), "utf-8", function (err, data) {
        if (err) throw err;
        else {
          res.render("fileopened", {
            filename: req.params.filename,
            file: data,
            files: files,
            folderpath: __dirname,
            foldername: __dirname.split("\\").pop(),
          });
        }
      });
    }
  });
});

app.get("/newfile", function (req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`, "", function (err) {
    if (err) throw err;
    res.redirect("/VsCode/files");
  });
});

app.get("/newfolder", function (req, res) {
  fs.mkdir(`./uploads/${req.query.foldername}`, function (err) {
    if (err) throw err;
    res.redirect("/VsCode/files");
  });
});

app.get("/editabledata/:filename", function (req, res) {
  fs.writeFile( `./uploads/${req.params.filename}`, req.query.editeddata, function (err) {
      if (err) throw err;
      res.redirect(`/VsCode/files/${req.params.filename}`);
    }
  );
});

app.get("/deletefile/:filename", function (req, res) {
  if (req.params.filename.split(".").length == 1) {
    fs.rmdir(`./uploads/${req.params.filename}`, function (err) {
      if (err) throw err;
      else {
        if (req.headers.referer.split("/").pop() == req.params.filename)
          res.redirect("/VsCode/files");
        else res.redirect(req.headers.referer);
      }
    });
  }
  else{
    fs.unlink(`./uploads/${req.params.filename}`, function (err) {
      if (err) throw err;
      else {
        if (req.headers.referer.split("/").pop() == req.params.filename)
          res.redirect("/VsCode/files");
        else res.redirect(req.headers.referer);
      }
    });
  }
});

app.listen(1000, function () {
  console.log("SJ's server started...");
});
