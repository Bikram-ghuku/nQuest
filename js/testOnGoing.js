const socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
    console.log("Connected", socket.id)
    socket.emit('system_online', {sys_no : x.system_id, lab_no: x.lab_no, socket_id: socket.id, type: 'examSys'})
    socket.emit('status', {sys_no : x.sys_no, lab_no: x.lab_no, socket_id: socket.id, type: 'examSys', status: 'examStart'});
});

var qpaper = JSON.parse(localStorage.getItem("qpaper"))
var groups = qpaper.data

groups.forEach((item)=>{
    
    var x = document.getElementsByClassName("groups")[0]
    x.innerHTML+="<div class=\"grp_btn_cover\" ><button class=\"grp_btn\" id=\"group_"+item.gid+"\" onClick=\"section_act("+item.gid+")\">"+item.group+"</button></div>"
})


