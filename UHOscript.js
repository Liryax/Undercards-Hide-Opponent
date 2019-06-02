// ==UserScript==
// @name         Undercads : Hide Opponent
// @match        https://*.undercards.net/Game
// @exclude      https://*.undercards.net/Play
// @version      1.0
// @description  Hide opponent's usernames and LV until hovered
// @author       Brittle Dread
// @match        https://undercards.net/Quests
// @grant        none
// ==/UserScript==



document.getElementById("enemyUsername").innerHTML = "Opponent"
document.getElementById("enemyLevel").innerHTML = "???"

var UHOrealName = ""
var UHOrealLV = ""

function UHOrevealInfo(){
    document.getElementById("enemyUsername").innerHTML = UHOrealName
    document.getElementById("enemyLevel").innerHTML = UHOrealLV
}

function UHOhideInfo(){
    document.getElementById("enemyUsername").innerHTML = "Opponent"
    document.getElementById("enemyLevel").innerHTML = "???"
}



var UHOintervalId = setInterval(function(){

    if(document.getElementById("enemyLevel").innerHTML != "???"){
        UHOrealName = document.getElementById("enemyUsername").innerHTML
        UHOrealLV = document.getElementById("enemyLevel").innerHTML

        UHOhideInfo()

        document.getElementById("enemyUsername").addEventListener("mouseover",UHOrevealInfo)
        document.getElementById("enemyUsername").addEventListener("mouseout",UHOhideInfo)

        document.getElementById("enemyLevel").addEventListener("mouseover",UHOrevealInfo)
        document.getElementById("enemyLevel").addEventListener("mouseout",UHOhideInfo)

        clearInterval(UHOintervalId);
    }


}, 100);
