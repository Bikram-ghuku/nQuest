import qpaper from "./practice_question/Qpaper.js";
import questions from "./practice_question/questions.js"



var x = JSON.parse(localStorage.getItem("user_data"))

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