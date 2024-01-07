var myClass = [];
var newMyClass = [];
var kq1 = document.getElementById("kq1");
var kq2 = document.getElementById("kq2");
var kq3 = document.getElementById("kq3");
var kq6 = document.getElementById("kq6");
var addstudent = document.getElementById("Add");
var input = document.getElementById("input1");
var calculate = document.getElementById("calc");
var textbox = document.getElementById("MyClass");
var student_birthday = document.getElementById("birthday");

const alertPlaceholder = document.getElementById("alert-item");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

// ThemHocSinh("001,peter,8", newMyClass);
addstudent.addEventListener("click", function () {
  ThemHocSinhVaoLop(GetInput(), newMyClass);
  textbox.value = TextBoxMyClass(newMyClass);
});

calculate.addEventListener("click", function () {
  kq1.value = ListTenHocSinh(newMyClass);
  kq3.value = TinhDiemTrungBinh(newMyClass);
  kq4.value = TinhSoHocSinhGioi(newMyClass, TinhDiemTrungBinh(newMyClass));
  kq5.value = TinhSoHocSinhTrungBinh(newMyClass, TinhDiemTrungBinh(newMyClass));
  kq6.value = TimDiemLonNhat(newMyClass);
  kq7.value = HocSinhCoDiemLonNhat(newMyClass);
});

function TinhDiemTrungBinh(myClass) {
  var studentmark = [];
  myClass.forEach((element) => {
    studentmark.push(parseInt(element.mark));
  });

  var diemTrungBinh = 0;
  var initialValue = 0;
  var sumWithInitial = studentmark.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  diemTrungBinh = sumWithInitial / myClass.length;
  return diemTrungBinh;
}

function TinhSoHocSinhGioi(myClass, dtb) {
  var goodMark = [];
  myClass.forEach((element) => {
    if (element.mark >= dtb) {
      goodMark.push(parseInt(element.mark));
    }
  });
  return goodMark.length;
}

function TinhSoHocSinhTrungBinh(myClass, dtb) {
  var underavg = [];
  myClass.forEach((element) => {
    if (element.mark <= dtb) {
      underavg.push(element.name);
    }
  });
  return underavg.length;
}

function TimDiemLonNhat(myClass) {
  //Return diemlonnhat type:so
  diemlonnhat = myClass[0].mark;
  var maxindex = 0;
  for (var i = 1; i < myClass.length; i++) {
    if (myClass[i].mark > diemlonnhat) {
      diemlonnhat = myClass[i].mark;
      maxindex = i;
    }
  }
  hscodiemlonnhat = myClass[maxindex].name;
  console.log(myClass[maxindex].name);
  return diemlonnhat;
}

function HocSinhCoDiemLonNhat(myClass) {
  //Return diemlonnhat type:so
  diemlonnhat = myClass[0].mark;
  var maxindex = 0;
  for (var i = 1; i < myClass.length; i++) {
    if (myClass[i].mark > diemlonnhat) {
      diemlonnhat = myClass[i].mark;
      maxindex = i;
    }
  }
  hscodiemlonnhat = myClass[maxindex].name;
  console.log(myClass[maxindex].name);
  return hscodiemlonnhat;
}

function TimDiemNhoNhat(myClass) {
  diemnhonhat = myClass[0].mark;
  var minindex = 0;
  for (var i = 1; i < myClass.length; i++) {
    if (myClass[i].mark < diemnhonhat) {
      diemnhonhat = myClass[i].mark;
      minindex = i;
    }
  }
  console.log(diemnhonhat);
  return diemnhonhat;
}

function HocSinhCoDiemnhoNhat(myClass) {
  diemnhonhat = myClass[0].mark;
  var minindex = 0;
  for (var i = 1; i < myClass.length; i++) {
    if (myClass[i].mark < diemnhonhat) {
      diemnhonhat = myClass[i].mark;
      minindex = i;
    }
  }
  hssinhcoDiemnhonhat = myClass[minindex].name;
  console.log(myClass[minindex].name);
  return hssinhcoDiemnhonhat;
}
function onlycapitalizeFirstLetter(string) {
  const word = string;

  const lowercase = word.toLowerCase();
  // console.log(lowercase);

  const firstLetter = lowercase.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();

  const remainingLetters = lowercase.slice(1);

  const capitalizedWord = firstLetterCap + remainingLetters;

  console.log(capitalizedWord);
  return capitalizedWord;
}

function ThemHocSinhVaoLop(entered, newMyClass) {
  var d = new Date(student_birthday.value);
  var namsinh = d.getFullYear();
  var a = 2024 - namsinh;
  if (a > 9) {
    var extracted = entered.split(",");
    var hsmoi = {
      id: extracted[0],
      name: onlycapitalizeFirstLetter(extracted[1]),
      age: a,
      mark: parseFloat(extracted[2]),
      created_time: Date.now(),
      student_birthday: student_birthday.value,
    };
    console.log(`d:${d}`);
    console.log(hsmoi);
    console.log(student_birthday.value);
    typeof student_birthday.value;
    newMyClass.push(hsmoi);
    hsmoi = {};
    input.value = "";
    appendAlert("Đã thêm học sinh thành công", "success");
  } else {
    // alert("Nam sinh khong hop le");
    appendAlert("Năm sinh không hợp lệ", "danger");
  }
}
function GetInput() {
  return input.value;
}

function ListTenHocSinh(newMyClass) {
  var studentNames = [];
  newMyClass.forEach((element) => {
    studentNames.push(element.name);
  });
  return studentNames;
}

function TextBoxMyClass(newMyClass) {
  var myStudent = [];
  newMyClass.forEach((element) => {
    var created_time1 = new Date(element.created_time);
    var created_time_str = created_time1[Symbol.toPrimitive]("string");
    var created_time_str2 = created_time_str.split(" ");

    //var date = created_time_str2.getDate();
    // var month = created_time_str2.getMonth();
    // var fullyear = created_time_str2.getFullYear();
    // console.log(created_time_str2);
    // console.log(created_time_str);
    // console.log(created_time);

    // console.log(date);
    // console.log(month);
    // console.log(fullyear);

    var template = `\nname : ${element.name},
     mark: ${element.mark},
     age: ${element.age} 
     student_birthday: ${element.student_birthday}
     created time: ${created_time_str2[0]}, ${created_time_str2[1]}/${created_time_str2[2]}/${created_time_str2[3]} `;
    myStudent.push(template);
  });
  return myStudent;
}
// var name1 = "pHuc";
// var name2 = "phuc";
// var name3 = "PHUC";
// var name4 = "Phuc";

// // function capitalizeFLetter(hovaten) {
// //   let string = hovaten;
// //   var fixname = string[0].toUpperCase() + string.slice(1);
// //   console.log(fixname);
// // }

// // capitalizeFLetter(phuc);

// // function capitalizeFirstLetter(string) {
// //   console.log(string.charAt(0).toUpperCase() + string.slice(1));
// //   return string.charAt(0).toUpperCase() + string.slice(1);
// // }

// // capitalizeFirstLetter(phuc);

// onlycapitalizeFirstLetter(name1);
// onlycapitalizeFirstLetter(name2);
// onlycapitalizeFirstLetter(name3);
// onlycapitalizeFirstLetter(name4);
