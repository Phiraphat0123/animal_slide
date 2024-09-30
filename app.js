let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector(".carousel")
let listItemDom = document.querySelector(".carousel .list")
let thumbnailDom = document.querySelector(".carousel .thumbnail")

let timeRunning =3000
let timeAutoNext = 7000
let runTimeOut 
let runAutoRun=setTimeout(()=>{
    nextDom.click()
},timeAutoNext)

nextDom.onclick= function(){
    showSlider('next')
}
prevDom.onclick=function(){
    showSlider('prev')
}


function showSlider (type){
    let itemSlider =document.querySelectorAll(".carousel .list .item")
    let itemThumbnail =document.querySelectorAll(".carousel .thumbnail .item")

    if(type === "next"){
        // move child element to last for show in list and thumbnail list
        listItemDom.appendChild(itemSlider[0]);
        // console.log(listItemDom)
        thumbnailDom.appendChild(itemThumbnail[0])
        // add animation to carousel
        carouselDom.classList.add('next')
    }else{
        let positionLastItem = itemSlider.length -1
        listItemDom.prepend(itemSlider[positionLastItem]) //move child to first order
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut)
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')

    }, timeRunning)

    clearTimeout(runAutoRun)
    runAutoRun =setTimeout(()=>{
        nextDom.click()
    },timeAutoNext)
    
}