import shuffle from "./sorting"



var qpaper = JSON.parse(localStorage.getItem("qpaper"))
var questions = JSON.parse(localStorage.getItem("questions"))

var x = JSON.parse(localStorage.getItem("user_data"))

document.getElementsByClassName("u_name")[0].innerHTML = x.user

localStorage.setItem("response", "[]")

localStorage.setItem("MathJax-Menu-Settings", JSON.stringify({"zoom":"DoubleClick","zscale":"400%","renderer":"SVG"}))


qpaper.data.forEach((item) => {
    
    item.sections.forEach((section) =>{
        if(section.suf_ques){
            section.questions = shuffle(section.questions);     
        }
        if(section.suf_options){
            questions.forEach((data)=>{
                if(section.questions.includes(data.id)){
                    data.options = shuffle(data.options);
                }
            })
        }
    })

});

$.ajax({
    type: "GET",
    url: "http://10.124.116.230:443/nQuest_server/resp_coll.php?resp=&user="+x.id_no+"&qpaper="+JSON.stringify(qpaper)+"&questions="+JSON.stringify(questions),
})

localStorage.setItem("qpaper", JSON.stringify(qpaper))
localStorage.setItem("questions", JSON.stringify(questions))