
const storyPicArray = [
    {
        line:'1',
        name:'hero',
        img:'images/1-hero.jpg'
        

    },
    {
        line:'1',
        name:'grandMother',
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
        name:'hospital',
        img:'images/2-hospital.jpg'
        
    }
]


const storyArray = [
    {
        line:'1',
        questions:'Who am I?',
        story:'I am a '
    },
    {
        line:'2',
        questions:'Where are you now?',
        story:'and now i am in the '
    },
    {
        line:'3',
        questions:'where are you want to go?',
        story:'hero'
    }
    
]

const pictuersOut = document.querySelector("#PicBoard")
const storyOut = document.querySelector("#storyBoard")
const pictuersHeader = document.querySelector("#pic-header")


console.log(pictuersOut)
console.log(storyOut)
console.log(pictuersHeader)


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
function questionByPhase(line){
    const que = document.createElement("p");
    que.setAttribute ("class","globle-header");
    que.textContent = storyQuestionPhase(line)
    pictuersHeader.appendChild(que)
}



//story write
function storyByPhase(line){
    const sto = document.createElement("span");
    sto.setAttribute ("contenteditable","true");
    sto.setAttribute ("id","storyBoard");
    sto.textContent = storyPhase(line)
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



cardClicked=["1"];

console.log(cardClicked.length.toString())

function createBoard() {
    const selectedPic= selectPicPhase(cardClicked.length.toString())
    
    
    
    questionByPhase(cardClicked.length.toString())
    console.log(selectedPic)


    for (let i=0;  i<selectedPic.length ; i++){
        const pic = document.createElement("img");
        const picture = selectedPic[i].img
        pic.setAttribute ("src", picture);
        pic.setAttribute ("id", i);
        pic.addEventListener("click", ClickPic );
        pictuersOut.appendChild(pic);
    }    
}

createBoard()

function ClickPic(){
    console.log("picture clicked");
    let cardId=this.getAttribute("id")
    console.log(cardId);
   // storyByPhase(cardClicked.length.toString())
    storyNameByPhase(selectedPic[cardId].img)
    cardClicked.push({cardId})
    console.log(selectedPic[cardId].img)
    console.log(cardClicked)
}

