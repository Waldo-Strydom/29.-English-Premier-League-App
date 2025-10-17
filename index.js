
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

const prevAndNxtDiv = document.getElementById("ntxAndPrevDiv")
const prevBtn= document.getElementById("prev")
const nxtBtn= document.getElementById("nxt")


getMatchBtn.addEventListener("click",()=>{

        if(teamDiv.classList.contains("hidden")){
        teamDiv.classList.remove("hidden")
        dateText.classList.remove("hidden")
        venueText.classList.remove("hidden")
        vidLink.classList.remove("hidden")
        prevAndNxtDiv.classList.remove("hidden")

    }


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

async function getId(str){
     const res = await fetch(str)
if (!res.ok) {
    // outImg.setAttribute("src", "./Assets/404.jpeg")
    console.log("err")
    let newMsg = document.createElement("p")
    newMsg.textContent="Error! Please try a different option."
    document.body.insertBefore(newMsg, document.body.children[0]);

    //  hName.textContent = ""
    // hTeamLogo.setAttribute("src","")
    // hScore.textContent = ""

    // aName.textContent = ""
    // aTeamLogo.setAttribute("src","")
    // aScore.textContent = ""

    // dateText.textContent = ""
    // venueText.textContent = ""
    // vidLink.setAttribute("href", "")
    

throw Error("Something went wrong.")
}
return res.json()

}

async function getPlayers(str){
     const res = await fetch(str)
if (!res.ok) {
    // outImg.setAttribute("src", "./Assets/404.jpeg")
    console.log("err")
    let newMsg = document.createElement("p")
    newMsg.textContent="Error! Please try a different option."
    document.body.insertBefore(newMsg, document.body.children[0]);

    //  hName.textContent = ""
    // hTeamLogo.setAttribute("src","")
    // hScore.textContent = ""

    // aName.textContent = ""
    // aTeamLogo.setAttribute("src","")
    // aScore.textContent = ""

    // dateText.textContent = ""
    // venueText.textContent = ""
    // vidLink.setAttribute("href", "")
    

throw Error("Something went wrong.")
}
return res.json()

}


const getListBtn = document.getElementById("listBtn")
getListBtn.addEventListener("click",()=>{

        if(output.classList.contains("hidden")){
        output.classList.remove("hidden")
    }

    if(!teamDiv.classList.contains("hidden")){
        teamDiv.classList.add("hidden")
        dateText.classList.add("hidden")
        venueText.classList.add("hidden")
        vidLink.classList.add("hidden")
        prevAndNxtDiv.classList.add("hidden")

    }

    let str = `https://www.thesportsdb.com/api/v1/json/123/`
    const playerList = document.getElementById("playerList").value
    str+=`searchteams.php?t=${playerList}`;

     data = getId(str)
.then((data)=>{

    let id = data.teams[0].idTeam
    str = `https://www.thesportsdb.com/api/v1/json/123/`
    let newStr = str+=`lookup_all_players.php?id=${id}`

    let newData=getPlayers(newStr)
    .then((newData)=>{
        displayTeam(newData)
    })
})

})

const  displayTeam = (list)=>{
    console.log(list)
    output.innerHTML= ""

    let players = list.player
    console.log(players)
            /*<div class="playerInfoDiv" class="hidden">
            <div class="infoDiv">
            <p class="pName">Ben White</p>
            <p class="pNum">4</p>
            <img class="pPic" src="./Assets/premier-league/testImg.png">
            </div>
            <p class="pBio">Benjamin William White (born 8 October 1997) is an English professional footballer who plays as a centre-back for Premier League club Arsenal and the England national team.\r\n\r\nWhilst with Brighton & Hove Albion, White had spells on loan at Newport County of League Two, Peterborough United of League One and Leeds United. At Leeds he played in every game, helping them win the 2019–20 Championship and gain promotion to the Premier League. White has played in all top four English leagues, making his way up from League Two to the Premier League in the space of four seasons.\r\n\r\nIn the summer of 2020, speculation regarding his football future was rife, with Leeds public on their eagerness to sign White on a permanent deal and other clubs registering their interest. Ultimately, he stayed on the south coast, signing a long term contract at Brighton. He made 36 Premier League appearances in the 2020–21 season, winning Brighton's 2020–21 player of the season award.\r\n\r\nWhite was named in the England team for the first time in May 2021, where he was selected as part of the provisional 33-man squad for UEFA Euro 2020. He was later cut from the squad, though remained on standby for the tournament and made his debut as a substitute in June in a 1–0 win over Austria. He made his first start for England in the second and final warm up match in another 1–0 victory, this time against Romania on 6 June. On 7 June, he was named in the squad as a replacement for Trent Alexander-Arnold.</p>

            </div>
            */
    for(player of players){
      let newPlayerInfoDiv = document.createElement("div")
      newPlayerInfoDiv.classList.add("playerInfoDiv")
      output.appendChild(newPlayerInfoDiv)

      let newinfoDiv = document.createElement("div")
      newinfoDiv.classList.add("infoDiv")
      newPlayerInfoDiv.appendChild(newinfoDiv)

      let newPName = document.createElement("p")
        newPName.textContent= `${player.strPlayer}`
        newPName.classList.add("pName")
        newinfoDiv.appendChild(newPName)

      let newPNum = document.createElement("p")
        newPNum.textContent= `${player.strNumber}`
        newPNum.classList.add("pNum")
        newinfoDiv.appendChild(newPNum)  
        
      let newImg = document.createElement("img")
        newImg.classList.add("pPic")
        newImg.setAttribute("src",`${player.strCutout}`)
        newinfoDiv.appendChild(newImg)   
        
      let newPBio = document.createElement("p")
        newPBio.textContent= `${player.strDescriptionEN}`
        newPBio.classList.add("pBio")
        newPlayerInfoDiv.appendChild(newPBio)   

    }
}
