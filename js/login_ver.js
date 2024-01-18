import confidentials from "../confidentials.js";
import qpaper from "./sample_config_file/Qpaper.js";
import questions from "./sample_config_file/questions.js"
const socket = io(confidentials.server);



var x = JSON.parse(localStorage.getItem("user_data"))

socket.on('connect', () => {
    console.log("Connected", socket.id)
    socket.emit('system_online', {sys_no : x.system_id, lab_no: x.lab_no, socket_id: socket.id, type: 'examSys'})
});

socket.on('alertMsg', (data) => {
    alert(data)
});

socket.emit('status', {sys_no : x.sys_no, lab_no: x.lab_no, socket_id: socket.id, type: 'examSys', status: 'infoPg'});

document.getElementsByClassName("u_name")[0].innerHTML = x.user

localStorage.setItem("response", "[]")

localStorage.setItem("MathJax-Menu-Settings", JSON.stringify({"zoom":"DoubleClick","zscale":"400%","renderer":"SVG"}))


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) { 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
  }

qpaper.data.forEach((item) => {
    
    item.sections.forEach((section) =>{
        if(section.suf_ques){
            section.questions = shuffle(section.questions);     
        }
        if(section.suf_options){
            questions.forEach((data)=>{
                if(section.questions.includes(data.id)){
                    try{
                        data.options = shuffle(data.options);
                    }
                    catch(err){
                        console.log(err)
                    }
                }
            })
        }
    })

});


localStorage.setItem("qpaper", JSON.stringify(qpaper))
localStorage.setItem("questions", JSON.stringify(questions))