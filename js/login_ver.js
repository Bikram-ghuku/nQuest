import qpaper from "./practice_question/Qpaper.js";
import questions from "./practice_question/questions.js"



var x = JSON.parse(localStorage.getItem("user_data"))

document.getElementsByClassName("u_name")[0].innerHTML = x.user


localStorage.setItem("response", "[]")
localStorage.setItem("questions", JSON.stringify(questions))
localStorage.setItem("MathJax-Menu-Settings", JSON.stringify({"zoom":"DoubleClick","zscale":"400%","renderer":"SVG"}))
localStorage.setItem("qpaper", JSON.stringify(qpaper))
