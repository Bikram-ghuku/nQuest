const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sys_no = urlParams.get('sys_no')
const lab_no = urlParams.get('lab_no')



if(!JSON.parse(localStorage.getItem("user_data"))){
    document.getElementsByClassName("user_assigned")[0].style = "display:none"
    document.getElementsByClassName("login_form")[0].style= "height: 95vh; padding: 30vh;"
}else{
    var x = JSON.parse(localStorage.getItem("user_data"))
    document.getElementsByClassName("uname_contents")[0].innerHTML = x.user
    document.getElementById("uname").value = x.id_no
    $("#uname").prop("readonly", true);
}
document.getElementsByClassName("lab_contents")[0].innerHTML = lab_no
document.getElementsByClassName("sys_contents")[0].innerHTML = sys_no

setInterval(()=>{
    if(!localStorage.getItem("user_data")){
        location.reload()
        $.ajax({
            type:"GET",
            cors: true,
            url: "http://localhost/nQuest_server/sys_assign_rec.php",
            success: (data)=>{
                data = JSON.parse(data)
                console.log(data)
                for(var i=0; i<data.length; i++){
                    if(data[i].system_id==sys_no){
                        localStorage.setItem("user_data", JSON.stringify(data[i]))
                    }
                }
            }
        })
    }


}, 1000)