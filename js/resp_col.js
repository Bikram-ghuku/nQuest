var x = document.getElementsByClassName("main_table")[0]

var qpaper = JSON.parse(localStorage.getItem("qpaper"))

console.log(x)
var grp_num = qpaper.data.length
var tab_height = Math.floor((100-10*grp_num)/grp_num)
qpaper.data.forEach((items) => {
    var s = x.cloneNode(true)
    s.id="table_"+items.gid
    var f = document.createElement("div")
    var f_t_d = document.createElement("div")
    var f_t = document.createTextNode(items.group)
    f_t_d.style = "font-weight: 600; text-align:center;"
    s.style = "height: "+tab_height+"vh"
    f_t_d.appendChild(f_t)
    f.appendChild(f_t_d)
    

    items.sections.forEach((items_sec)=>{
        var t_r = document.createElement("tr")
        var num_td = document.createElement("th")
        num_td.scope = "row"
        var num = document.createTextNode(items_sec.id)
        num_td.appendChild(num)
        t_r.appendChild(num_td)
        var num_td = document.createElement("td")
        var num = document.createTextNode(items_sec.num_ques)
        num_td.appendChild(num)
        t_r.appendChild(num_td)
        var num_td = document.createElement("td")
        var num = document.createTextNode(items_sec.answered.length)
        num_td.appendChild(num)
        t_r.appendChild(num_td)
        var num_td = document.createElement("td")
        var n_ans = parseInt(items_sec.num_ques) - parseInt(items_sec.answered.length) - parseInt(items_sec.mfr.length) - parseInt(items_sec.amfr.length)
        var num = document.createTextNode(n_ans)
        num_td.appendChild(num)
        t_r.appendChild(num_td)
        var num_td = document.createElement("td")
        var num = document.createTextNode(items_sec.mfr.length)
        num_td.appendChild(num)
        t_r.appendChild(num_td)
        var num_td = document.createElement("td")
        var num = document.createTextNode(items_sec.amfr.length)
        num_td.appendChild(num)
        t_r.appendChild(num_td)
        s.appendChild(t_r)
    })

    f.appendChild(s)
    x.parentElement.appendChild(f)
});

x.style="display: none"

var now = new Date().getTime()
if((parseInt(localStorage.getItem("ending")) - now) > 0){
    document.getElementById("back_btn").style = ""
    document.getElementById("back_btn").onclick = ()=>{
        document.location = "./testOnGoing.htm"
    }
}