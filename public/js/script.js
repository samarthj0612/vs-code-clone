var flag = false;
document .querySelector("#leftcontroller") .addEventListener("click", function () {
  if (flag == false) {
    gsap.to("#left", {
      x: -310,
    });

    flag = true;
    document.querySelector("#leftcontroller").style.backgroundColor = "transparent";
  } else {
    gsap.to("#left", {
      x: 0,
    });

    flag = false;
    document.querySelector("#leftcontroller").style.backgroundColor = "rgba(255, 255, 255, 0.242)";
  }
});

var flag1 = false;
document .querySelector("#filecontroller") .addEventListener("click", function () {
  if (flag1 == false) {
    gsap.to("#filedropdown", {
      y: "100%",
    });

    flag1 = true;
    document.querySelector("#filecontroller").style.backgroundColor = "rgba(255, 255, 255, 0.242)";
  } else {
    gsap.to("#filedropdown", {
      y: "-100%",
    });

    flag1 = false;
    document.querySelector("#filecontroller").style.backgroundColor = "initial";
  }
});

var flag2 = false;
document .querySelector("#editcontroller") .addEventListener("click", function () {
  if (flag2 == false) {
    gsap.to("#editdropdown", {
      y: "100%",
    });

    flag2 = true;
    document.querySelector("#editcontroller").style.backgroundColor = "rgba(255, 255, 255, 0.242)";
  } else {
    gsap.to("#editdropdown", {
      y: "-100%",
    });

    flag2 = false;
    document.querySelector("#editcontroller").style.backgroundColor = "initial";
  }
});

var flag3 = false;
document .querySelector("#terminalcontroller") .addEventListener("click", function () {
  if (flag3 == false) {
    gsap.to("#terminaldropdown", {
      y: "100%",
    });

    flag3 = true;
    document.querySelector("#terminalcontroller").style.backgroundColor = "rgba(255, 255, 255, 0.242)";
  } else {
    gsap.to("#terminaldropdown", {
      y: "-100%",
    });

    flag3 = false;
    document.querySelector("#terminalcontroller").style.backgroundColor = "initial";
  }
});

var addfile = document.querySelector("#addfile");
addfile.addEventListener("click", function () {
  document.querySelector("#filecreator").style.display = "block";
});

var addfolder = document.querySelector("#addfolder");
addfolder.addEventListener("click", function () {
  document.querySelector("#foldercreator").style.display = "block";
});