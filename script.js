const persons = document.getElementById("persons");
const btype = document.getElementById("boats");
const duration = document.getElementById("hours");
let boatcount;
function getboatcount() {
  for (i = 0; i < 4; i++) {
    if (btype[i].selected == true) {
      seater = JSON.parse(btype[i].value).seats;
    }
  }
  boatcount = parseInt(persons.value / seater);
  console.log(persons.value + seater);
  console.log(boatcount);
  if (persons.value % seater > 0) {
    boatcount += 1;
    console.log(boatcount);
  } else {
    console.log(boatcount);
  }
  return boatcount;
}
function getboatprice() {
  for (i = 0; i < 4; i++) {
    if (btype[i].selected == true) {
      amount = JSON.parse(btype[i].value).amount;
    }
  }
  boatprice = boatcount * amount;
  console.log(boatprice);
}
function calculatebill() {
  totalprice = boatprice * parseInt(duration.value);
  console.log(totalprice);
  return totalprice;
}
function bookride() {
  event.preventDefault();
  getboatcount();
  getboatprice();
  calculatebill();
}
