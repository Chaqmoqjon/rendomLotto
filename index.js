let startBtn = document.querySelector(".start_btn")
let images = document.querySelectorAll(".item img")
let resultTitle = document.querySelector(".result_title")
let lose = document.querySelector(".lose")
let win = document.querySelector(".win")
let audio1 = document.querySelector(".audio1")
let audio2 = document.querySelector(".audio2")


startBtn.addEventListener("click", ()=>{
    resultTitle.innerHTML = ""
    audio2.setAttribute("src", "")
    audio1.setAttribute("src", "")
    imagerandom()
    startBtn.disabled = true
    document.body.classList.remove("gold", "danger")
})

let imagesArrey = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg" ]
let loseTittle = ["Ishonmang!", "Boshqa o'ynamang!", "Hammasi yolg'on!", "Bu yolg'on!", "To'xtating!!!" ]

let loseCount = 0
let winCount = 0


function randomlose(){
    return Math.floor(Math.random() * loseTittle.length)
}


function randomIndex(){
    return Math.floor(Math.random() * imagesArrey.length)
}

function imagerandom(){

    let interval = setInterval(()=>{
        images[0].setAttribute("src", imagesArrey[randomIndex()])
        images[1].setAttribute("src", imagesArrey[randomIndex()])
        images[2].setAttribute("src", imagesArrey[randomIndex()])
    }, 100)
    setTimeout(()=>{
        clearInterval(interval)
        startBtn.disabled = false
        if(images[0].src === images[1].src && images[0].src === images[2].src){
            
            audio1.setAttribute("src", "./victory.mp3")
            resultTitle.innerHTML = "Nechta urinishda yutdingiz"
            document.body.classList.add("gold");
            loseCount = 0
            win.innerHTML = winCount
        } else{
            
            audio2.setAttribute("src", "./boo.mp3")
            resultTitle.innerHTML = loseTittle[randomlose()]
            document.body.classList.add("danger")
            loseCount++
            lose.innerHTML = loseCount
        }
        
    }, 1500)
}


