import confidentials from "../confidentials.js"

var qpaper = JSON.parse(localStorage.getItem("qpaper"))
var questions = JSON.parse(localStorage.getItem("questions"))
const socket = io(confidentials.server);

localStorage.removeItem("qpaper")
localStorage.removeItem("questions")

var x = JSON.parse(localStorage.getItem("user_data"))

socket.on('connect', () => {
    console.log("Connected", socket.id)
    socket.emit('system_online', {sys_no : x.system_id, lab_no: x.lab_no, socket_id: socket.id, type: 'examSys'})
    socket.emit('status', {sys_no : x.sys_no, lab_no: x.lab_no, socket_id: socket.id, type: 'examSys', status: 'infoPg2'});
});

socket.on('alertMsg', (data) => {
    alert(data)
});

x

document.getElementsByClassName("u_name")[0].innerHTML = x.user

localStorage.setItem("response", "[]")

localStorage.setItem("MathJax-Menu-Settings", JSON.stringify({"zoom":"DoubleClick","zscale":"400%","renderer":"SVG"}))


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
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

$.ajax({
    type: "GET",
    url: confidentials.server+"resp_coll.php?resp=&user="+x.id_no+"&qpaper="+JSON.stringify(qpaper)+"&questions="+JSON.stringify(questions),
})

localStorage.setItem("qpaper", JSON.stringify(qpaper))
localStorage.setItem("questions", JSON.stringify(questions))