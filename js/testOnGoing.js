import qpaper from "./Qpaper.js";




var groups = qpaper.data
localStorage.setItem("watermark_id", "707007746")
localStorage.setItem("qpaper", JSON.stringify(qpaper))
groups.forEach((item)=>{
    
    var x = document.getElementsByClassName("groups")[0]
    x.innerHTML+="<div class=\"grp_btn_cover\" ><button class=\"grp_btn\" id=\"group_"+item.gid+"\" onClick=\"section_act("+item.gid+")\">"+item.group+"</button></div>"
})





