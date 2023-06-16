import qpaper from "./practice_question/Qpaper.js";
import questions from "./practice_question/questions.js"



var x = JSON.parse(localStorage.getItem("user_data"))

document.getElementsByClassName("u_name")[0].innerHTML = x.user

localStorage.setItem("response", "[]")

localStorage.setItem("MathJax-Menu-Settings", JSON.stringify({"zoom":"DoubleClick","zscale":"400%","renderer":"SVG"}))


qpaper.data.forEach((item) => {
    
    item.sections.forEach((section) =>{
        if(section.suf_ques){
            section.questions.sort(() => Math.random() - 0.5);      
        }
        if(section.suf_options){
            questions.forEach((data)=>{
                if(section.questions.includes(data.id)){
                    data.options.sort(() => Math.random() - 0.5);
                }
            })
        }
    })

});

$.ajax({
    type: "GET",
    url: "http://localhost/nQuest_server/resp_coll.php?resp=&user="+x.id_no+"&qpaper="+JSON.stringify(qpaper)+"&questions="+JSON.stringify(questions),
})

localStorage.setItem("qpaper", JSON.stringify(qpaper))
localStorage.setItem("questions", JSON.stringify(questions))