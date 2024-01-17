import confidentials from "../confidentials.js";
import offuser from "../offline.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var sys_no = urlParams.get('sys_no')
var lab_no = urlParams.get('lab_no')

document.getElementsByClassName("top")[0].innerHTML = ""
if(!sys_no && !lab_no){
    localStorage.setItem("user_data", JSON.stringify(offuser))
    lab_no = offuser.lab_no
    sys_no = offuser.system_id
}

if(!JSON.parse(localStorage.getItem("user_data"))){
    document.getElementsByClassName("user_assigned")[0].style = "display:none"
    document.getElementsByClassName("login_form")[0].style= "height: 95vh; padding: 30vh;"
}else{
    var x = JSON.parse(localStorage.getItem("user_data"))
    document.getElementsByClassName("uname_contents")[0].innerHTML = x.user
    document.getElementById("uname").value = x.id_no
    document.getElementsByClassName("top")[0].innerHTML = x.exam_name
	document.getElementsByClassName("sub_contents")[0].innerHTML = x.exam_name
    $("#uname").prop("readonly", true);
}
document.getElementsByClassName("lab_contents")[0].innerHTML = lab_no
document.getElementsByClassName("sys_contents")[0].innerHTML = sys_no

setInterval(()=>{
    if(!localStorage.getItem("user_data")){
        location.reload()
        $.ajax({
            type:"GET",
			cache: false,
            url: "http://"+confidentials.server+"/sys_assign_rec.php?sys_no="+sys_no+"&lab_no="+lab_no,
            success: (data)=>{
                data = JSON.parse(data)
                for(var i=0; i<data.length; i++){
                    if(data[i].system_id==sys_no){
                        localStorage.setItem("user_data", JSON.stringify(data[i]))
                    }
                }
            }
        })
    }


}, 5000)