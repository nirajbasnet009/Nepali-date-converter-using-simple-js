const container = document.querySelector(".container");
const info = document.querySelector(".info");
const year = document.getElementById("date");
const btn = document.getElementById("btn");
const month = document.getElementById("date1");
const day = document.getElementById("date2");
btn.addEventListener("click", func1);
function func1() {
  if (year.value && month.value && day.value) {
    birthyear = year.value - 57;
    birthmonth = month.value - 8;
    if (birthmonth <= 0 ? (birthmonth += 12) : birthmonth);
    if (birthmonth == 10 || birthmonth == 12 || birthmonth == 11) {
      birthday = day.value - 14;
    } else if (birthmonth == 9 || birthmonth == 8) {
      birthday = day.value - 15;
    } else if (birthmonth == 1 || birthmonth == 3 || birthmonth == 7) {
      birthday = day.value - 16;
      console.log(birthday);
    } else if (birthmonth == 2 || birthmonth == 6 || birthmonth == 4) {
      birthday = day.value - 17;
      console.log(birthday);
    }
    if (birthday <= 0) {
      birthmonth -= 1;
      if (
        birthmonth == 1 ||
        birthmonth == 3 ||
        birthmonth == 6 ||
        birthmonth == 8 ||
        birthmonth == 7 ||
        birthmonth == 10 ||
        birthmonth == 12
      ) {
        birthday += 31;
      } else if (
        birthmonth == 4 ||
        birthmonth == 5 ||
        birthmonth == 9 ||
        birthmonth == 11
      ) {
        birthday += 30;
      } else if (birthmonth == 2) {
        birthday += 28;
      }
    }
    if (birthmonth == 0) {
      birthmonth = 12;
    }
    const date = new Date();
    if (month.value >= 10 && day.value >= 18) {
      birthyear += 1;
    } else if (month.value > 10) {
      birthyear += 1;
    }

    newyear = date.getYear() + 1900;
    newmonth = date.getMonth() + 1;
    newday = date.getDate();

    ageyear = newyear - birthyear;
    agemonth = newmonth - birthmonth;
    ageday = newday - birthday;
    if (agemonth < 0 ? (agemonth += 12) : agemonth);
    if (agemonth == 0 ? (agemonth = newmonth) : agemonth);
    if (newmonth == birthmonth && birthday > newday) {
      ageyear -= 1;
    } else if (newmonth < birthmonth) {
      ageyear -= 1;
    }
    if (ageday <= 0 ? (ageday += 30) : ageday);
    if (birthday < newday ? (agemonth -= 1) : agemonth)
      if (birthyear % 4 == 0 ? (ageday += 1) : ageday)
        console.log(ageyear, agemonth, ageday);
    // console.log(birthyear, birthmonth, birthday);
    container.style.display = "flex";
    console.log(birthyear, birthmonth, birthday);
    text = `Your age is ${ageyear} Years ${agemonth} Month and ${ageday} Days`;
    info.innerText = text;
  } else {
    console.log("error occurred");
  }
}
