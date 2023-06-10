document.getElementsByClassName("user_assigned")[0].style = "display:none;"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sys_no = urlParams.get('sys_no')
const lab_no = urlParams.get('lab_no')
document.getElementById("lab_contents").innerHTML = lab_no
document.getElementById("sys_contents").innerHTML = sys_no