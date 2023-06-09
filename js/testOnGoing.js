import qpaper from "./practice_question/Qpaper.js";
import questions from "./practice_question/questions.js"




var groups = qpaper.data
localStorage.setItem("response", "[]")
localStorage.setItem("questions", JSON.stringify(questions))
localStorage.setItem("MathJax-Menu-Settings", JSON.stringify({"zoom":"DoubleClick","zscale":"400%","renderer":"SVG"}))
localStorage.setItem("qpaper", JSON.stringify(qpaper))
groups.forEach((item)=>{
    
    var x = document.getElementsByClassName("groups")[0]
    x.innerHTML+="<div class=\"grp_btn_cover\" ><button class=\"grp_btn\" id=\"group_"+item.gid+"\" onClick=\"section_act("+item.gid+")\">"+item.group+"</button></div>"
})


