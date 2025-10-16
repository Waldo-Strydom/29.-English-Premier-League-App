
async function getMatch(){
    
   const res = await fetch(str)
if (!res.ok) {
    // outImg.setAttribute("src", "./Assets/404.jpeg")
    console.log("err")
    let newMsg = document.createElement("p")
    newMsg.textContent="Error! Please try a different option."
    document.body.insertBefore(newMsg, document.body.children[0]);

     hName.textContent = ""
    hTeamLogo.setAttribute("src","")
    hScore.textContent = ""

    aName.textContent = ""
    aTeamLogo.setAttribute("src","")
    aScore.textContent = ""

    dateText.textContent = ""
    venueText.textContent = ""
    vidLink.setAttribute("href", "")
    

throw Error("Something went wrong.")
}
return res.json()

}

let localMatches = {

}

class Match{
    constructor(event){
        this.event = event
        
    }
}

let a = new Match("arsenal","arsenal")
let b = new Match("chealea", "chealsea")

// let newObj = {...localObj, a}
// localObj=newObj
// console.log(localObj)

// newObj = {...localObj, b}
// localObj=newObj
// console.log(localObj)

const displayMatch = (data)=>{

    if(document.getElementById("err")){
        document.getElementById("err").remove()
    }

    console.log("a")
     const eventArr = data["event"]

         if(eventArr==null&&output.children[0].id!="err"){
    console.log("err")
    let newMsg = document.createElement("p")
    newMsg.setAttribute("id","err")
    newMsg.textContent="Error! Please try a different option."
    output.insertBefore(newMsg, output.children[0]);

         hName.textContent = ""
    hTeamLogo.setAttribute("src","")
    hScore.textContent = ""

    aName.textContent = ""
    aTeamLogo.setAttribute("src","")
    aScore.textContent = ""

    dateText.textContent = ""
    venueText.textContent = ""
    vidLink.setAttribute("href", "")
    }

   
    
    // output.classList.remove("hidden")
    console.log(eventArr)
    console.log(i)
    hName.textContent = eventArr[i].strHomeTeam
    hTeamLogo.setAttribute("src",eventArr[i].strHomeTeamBadge)
    hScore.textContent = eventArr[i].intHomeScore

    aName.textContent = eventArr[i].strAwayTeam
    aTeamLogo.setAttribute("src",eventArr[i].strAwayTeamBadge)
    aScore.textContent = eventArr[i].intAwayScore

    dateText.textContent = eventArr[i].dateEvent
    venueText.textContent = eventArr[i].strVenue
    vidLink.setAttribute("href", eventArr[i].strVideo)
 

    vidLink.addEventListener("click",(e)=>{
            e.preventDefault();
            window.open(vidLink.href)
    })

    if(i==0){
        prevBtn.disabled=true
    }else{
        prevBtn.disabled=false
    }
    if(i==eventArr.length-1){
        nxtBtn.disabled=true
    }else{
        nxtBtn.disabled=false
    }

    if(eventArr.length==1){
        nxtBtn.disabled=true
    }


}



let i = 0
let data = ""
let obj = ""
let str = `https://www.thesportsdb.com/api/v1/json/123/`
const getMatchBtn = document.getElementById("getMatch")

const output = document.getElementById("output")
const teamDiv = document.getElementById("teamDiv")


const hName= document.getElementById("hName")
const hTeamLogo= document.getElementById("hTeamLogo")
const hScore= document.getElementById("hScore")


const aName= document.getElementById("aName")
const aTeamLogo= document.getElementById("aTeamLogo")
const aScore= document.getElementById("aScore")

const dateText= document.getElementById("dateText")
const venueText= document.getElementById("venueText")
const vidLink= document.getElementById("vidLink")

const prevBtn= document.getElementById("prev")
const nxtBtn= document.getElementById("nxt")


getMatchBtn.addEventListener("click",()=>{
    if(output.classList.contains("hidden")){
        output.classList.remove("hidden")
    }
    data = ""
    str = `https://www.thesportsdb.com/api/v1/json/123/`
    const team1 = document.getElementById("team1")
const team2 = document.getElementById("team2")
    str+= `searchevents.php?e=${team1.value}_vs_${team2.value}`;
    let key = `${team1.value}_vs_${team2.value}`
    if(localMatches[key]==null){
     data = getMatch()
.then((data)=>{
    obj = data
    i=0
    
    let nMatch =new Match(obj)
    localMatches[key] = nMatch
    console.log(localMatches)


   displayMatch(obj)

})
    }else{
        console.log("else")
        obj = localMatches[key].event
        console.log(obj)
        displayMatch(obj)
    }
 
})

       prevBtn.addEventListener("click",()=>{
        console.log("run")
        i-=1;
        displayMatch(obj)
    })

    nxtBtn.addEventListener("click", ()=>{
        i+=1;
        console.log(obj)
        displayMatch(obj)
    })

//https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=Arsenal_vs_Chelsea
//https://www.thesportsdb.com/api/v1/json/123/1searchevents.php?e=Arsenal_vs_Aston%20Villasearchevents.php?e=Arsenal_vs_Chelsea   


// Team list


