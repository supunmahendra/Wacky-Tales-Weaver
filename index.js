
const storyPicArray = [
    {
        line:'1',
        name:'hero',
        img:'images/1-hero.jpg'
    },
    {
        line:'1',
        name:'grand Mother',
        img:'images/1-grandmother.jpg'    
    },
    {
        line:'1',
        name:'dog',
        img:'images/1-dog.jpg' 
    },
    {
        line:'2',
        name:'house',
        img:'images/2-house.jpg'  
    },
    {
        line:'2',
        name:'shop',
        img:'images/2-shop.jpg'  
    },
    {
        line:'2',
        name:'city',
        img:'images/3-city.jpg' 
    },
    {
        line:'3',
        name:'moon',
        img:'images/3-moon.jpg' 
    },
    {
        line:'3',
        name:'vilage',
        img:'images/3-vilage.jpg' 
    },
    {
        line:'3',
        name:'hospital',
        img:'images/2-hospital.jpg'  
    },
    {
        line:'4',
        name:'bus',
        img:'images/4-bus.jpg' 
    },
    {
        line:'4',
        name:'rocket',
        img:'images/4-rocket.jpg' 
    },
    {
        line:'4',
        name:'ship',
        img:'images/4-ship.jpg'  
    },
    {
        line:'5',
        name:'chimp',
        img:'images/5-chimp.jpg'  
    },
    {
        line:'5',
        name:'friends',
        img:'images/5-friends.jpg'  
    },
    {
        line:'5',
        name:'satan',
        img:'images/5-satan.jpg'  
    }
]


const storyArray = [
    {
        line:'1',
        questions:'Who am I?',
        story:'Hello, I am a '
    },
    {
        line:'2',
        questions:'Where are you now?',
        story:'Now I am in the '
    },
    {
        line:'3',
        questions:'where do you want to go?',
        story:'But, I want to go to the '
    },
    {
        line:'4',
        questions:'How are you going?',
        story:'I need to use a vehicle to travel. Ah, I can go by '
    },
    {
        line:'5',
        questions:'Who would you like to travel with?',
        story:'I can not go along. I will go with the '
    }
    
]

const pictuersOut = document.querySelector("#PicBoard")
const storyOut = document.querySelector("#storyBoard")
const pictuersHeader = document.querySelector("#pic-header")


while(storyOut.lastElementChild){
    storyOut.removeChild(storyOut.lastElementChild) 
}





//select pictuer
function selectPicPhase(line){
    let matchedPic = storyPicArray.filter(no => no.line === line)
    if(matchedPic.length !== 0){
        return matchedPic.map(no => ({Name:no.name, img:no.img}))
    }
    else{
        console.log("phase erro")
    }
}

//console.log(selectPicPhase("1"))

//question selector
function storyQuestionPhase(line){
    let matchedQuestion = storyArray.filter(no => no.line === line)
    if(matchedQuestion.length !== 0){
        return matchedQuestion.map(no => no.questions)
    }
    else{
        console.log("phase erro")
    }
}

//story selector
function storyPhase(line){
    let matchedStory = storyArray.filter(no => no.line === line)
    if(matchedStory.length !== 0){
        return matchedStory.map(no => no.story)
    }
    else{
        console.log("phase erro")
    }
}

//PicName selector
function PicNamePhase(img){
    let matchedPicName = storyPicArray.filter(no => no.img === img)
    if(matchedPicName !== 0){
        return matchedPicName.map(no => no.name)
    }
    else{
        console.log("phase erro")
    }
}


//question write
function questionByPhase(line,id){
    const que = document.createElement("p");
    que.setAttribute ("class","globle-header");
    que.setAttribute ("id",id);
    que.textContent = storyQuestionPhase(line)
    console.log(que)
    if(id==1){
        pictuersHeader.appendChild(que)
    }
    
    else{
        const que2 = document.createElement("p");
        que2.setAttribute ("class","globle-header");
        que2.setAttribute ("id",id);
        que2.textContent = storyQuestionPhase(line)
        const pictuersHeader = document.querySelector("#pic-header")
        pictuersHeader.replaceChild(que2,pictuersHeader.children[0])
       }
}


//story write
function storyByPhase(line,selectedOption){
    const sto = document.createElement("span");
    sto.setAttribute ("contenteditable","true");
    sto.setAttribute ("id","storyBoard");
    sto.setAttribute ("class","story");
    sto.textContent = storyPhase(line) + selectedOption+". "
    storyOut.appendChild(sto)
}

//story name write
function storyNameByPhase(img){
    const stoTag = document.createElement("span");
    stoTag.setAttribute ("contenteditable","true");
    stoTag.setAttribute ("id","storyBoard");
    stoTag.textContent = PicNamePhase(img)
    storyOut.appendChild(stoTag)
}

// function start hear
let A=1
console.log(A.toString())

if( A == 1 ){
    const selectedPic = selectPicPhase("1")
}

function createBoard() {

    if( A == 1 ){
        const selectedPic = selectPicPhase(A.toString())
        questionByPhase(A.toString(),A)
        

        for (let i=0;  i<selectedPic.length ; i++){
            const pic = document.createElement("img");
            const picture = selectedPic[i].img
            pic.setAttribute ("src", picture);
            pic.setAttribute ("class","pictureClass");
            pic.setAttribute ("id", selectedPic[i].Name);
            pic.addEventListener("click", ClickPic );
            pictuersOut.appendChild(pic);
        }
    }
}

function ClickPic(){
    
    if( A<=storyArray.length ){
        console.log("picture clicked");
        let cardId=this.getAttribute("id")
        console.log(cardId);
        storyByPhase(A.toString(),cardId)
    }
    
    A=A+1
    if( A!==1 && A<storyArray.length+1 ){
        questionByPhase(A.toString(),A)
        const selectedPic = selectPicPhase(A.toString())
        
        for (let i=0;  i<=storyArray.length ; i++){
            const pic2 = document.createElement("img");
            const picture2 = selectedPic[i].img
            pic2.setAttribute ("src", picture2);
            pic2.setAttribute ("class","pictureClass");
            pic2.setAttribute ("id", selectedPic[i].Name);
            pic2.addEventListener("click", ClickPic );
            const pictuersOut = document.querySelector("#PicBoard")
            pictuersOut.replaceChild(pic2,pictuersOut.children[i]);
        }
    }
    if(A == storyArray.length+1){
        const sto = document.createElement("P");
        sto.setAttribute ("class","globle-header");
        sto.textContent = "Finished"
        storyOut.appendChild(sto)

        
    }
}
createBoard()

const refresh = document.getElementById("reset")
refresh.addEventListener("click", remove)

//refresh function
function remove(){
    
    while(storyOut.lastElementChild){
        storyOut.removeChild(storyOut.lastElementChild) 
    }

    A=1;
    if( A==1 && A<storyArray.length+1 ){
        while(pictuersHeader.lastElementChild){
            pictuersHeader.removeChild(pictuersHeader.lastElementChild) 
        }

        questionByPhase(A.toString(),A)
        const selectedPic = selectPicPhase(A.toString())

        for (let i=0;  i<=storyArray.length ; i++){
            const pic2 = document.createElement("img");
            const picture2 = selectedPic[i].img
            pic2.setAttribute ("src", picture2);
            pic2.setAttribute ("class","pictureClass");
            pic2.setAttribute ("id", selectedPic[i].Name);
            pic2.addEventListener("click", ClickPic );
            const pictuersOut = document.querySelector("#PicBoard")
            pictuersOut.replaceChild(pic2,pictuersOut.children[i]);
        }
    }
}