

var qpaper = JSON.parse(localStorage.getItem("qpaper"))
var groups = qpaper.data

groups.forEach((item)=>{
    
    var x = document.getElementsByClassName("groups")[0]
    x.innerHTML+="<div class=\"grp_btn_cover\" ><button class=\"grp_btn\" id=\"group_"+item.gid+"\" onClick=\"section_act("+item.gid+")\">"+item.group+"</button></div>"
})


