let image = '[{"src":"https://supermarket.am/images/cache/1ab/990/trim_17383eb3aad87c20b328a354a0314684.jpeg"},{"src":"https://supermarket.am/images/cache/645/1db/trim_7a01a7eee303d4a4bb243be9c2dbdb75.jpeg"},{"src":"https://supermarket.am/images/cache/fdd/aaa/trim_f449db441dcb030fcfa1d1a40e63a01d.JPG"},{"src":"https://supermarket.am/images/cache/1eb/4b5/trim_016c4b8cedd64219e990361590f6c7b4.jpg"},{"src":"https://supermarket.am/images/cache/3d0/d81/trim_31aa5c49e9fee18fe078f9d35d08765a.JPG"},{"src":"https://supermarket.am/images/cache/203/a94/trim_33ceb0c58211b1620458a7e5c32b2a6d.jpg"},{"src":"https://supermarket.am/images/cache/aba/9e7/trim_5f360ca69ecd7325db2cce1e2c7e92ea.JPG"},{"src":"https://supermarket.am/images/cache/a2a/d09/trim_fc7aaa4de59d9e075c72c2103427cf12.JPG"},{"src":"https://supermarket.am/images/cache/3bc/071/trim_3f0ad105d577737ce14433e4aec290eb.JPG"},{"src":"https://supermarket.am/images/cache/a54/2ef/trim_2c3013d57fc039925140a9aaa297d1a7.JPG"},{"src":"https://supermarket.am/images/cache/7af/932/trim_b5a6613bb5dba9c42e9e83a860f6ca49.JPG"},{"src":"https://supermarket.am/images/cache/d31/eff/trim_3eb1779897ce4df7e06942088775f4ee.jpg"},{"src":"https://supermarket.am/images/cache/def/cd4/trim_2c6037e470b224615999d62b03e635b4.jpg"},{"src":"https://supermarket.am/images/cache/47a/efb/trim_fb22b2370058681bad8400872997e121.jpg"},{"src":"https://supermarket.am/images/cache/b3b/f0f/trim_96d494f91f5012a2c63e8c7f4c997084.JPG"},{"src":"https://supermarket.am/images/cache/55a/24e/trim_29fa507a27c824784f6546971d6ef54a.jpg"},{"src":"https://supermarket.am/images/cache/94b/4c9/trim_0e5677dc2d8900aae14daf67b6d97a4a.jpg"},{"src":"https://supermarket.am/images/cache/ad2/e69/trim_c953301c102d5ac03e9da55bb13f6b98.jpg"},{"src":"https://supermarket.am/images/cache/fa2/64b/trim_dd50f31e8bd4e884fe282bc368d17c04.jpg"},{"src":"https://supermarket.am/images/cache/fbb/12a/trim_32200c1b237c2251b2518b9d26a16c64.jpg"}]'
let items = '[{"name":"Հյութ «Արփա» 1000մլ մուլտիֆրուտ"},{"name":"Նեկտար «Արփա» 1000մլ բալ"},{"name":"Նեկտար «Sandora» 1լ մուլտիֆրուտ"},{"name":"Հյութ «Sandora» 1լ նարինջ"},{"name":"Հյութ պարունակող ըմպելիք «Maaza» 1.5լ մանգո"},{"name":"Հյութ «Добрый» 1լ խնձոր"},{"name":"Հյութ «Sandora» 1լ խնձոր"},{"name":"Հյութ պարունակող ըմպելիք «Maaza» 1լ մանգո"},{"name":"Հյութ «Sandora» 1լ բալ"},{"name":"Հյութ «Sandora» 1լ արքայախնձոր"},{"name":"Հյութ «Добрый» 1լ նարինջ"},{"name":"Նեկտար «Добрый» 1լ մուլտիֆրուտ"},{"name":"Ըմպելիք «Նոյան Պրեմիում» 1լ մասուր"},{"name":"Հյութ «Добрый» 1լ խնձոր և ցիտրուս"},{"name":"Հյութ պարունակող ըմպելիք «Maaza» 250մլ"},{"name":"Հյութ «Santal» նարինջ 1լ"},{"name":"Հյութ «Sandora» 1լ նուռ"},{"name":"Հյութ «Yan» 0.93լ նարինջ"},{"name":"Նեկտար «Նոյան Պրեմիում» 1լ բալ"},{"name":"Հյութ «Արարատ Պրեմիում» 0.97լ բանան և ելակ"}]'
let priceValue = '[{"value":"420 դր"},{"value":"420 դր"},{"value":"770 դր"},{"value":"770 դր"},{"value":"1 090 դր"},{"value":"750 դր"},{"value":"770 դր"},{"value":"810 դր"},{"value":"770 դր"},{"value":"770 դր"},{"value":"650 դր"},{"value":"650 դր"},{"value":"660 դր"},{"value":"750 դր"},{"value":"310 դր"},{"value":"1 060 դր"},{"value":"770 դր"},{"value":"840 դր"},{"value":"660 դր"},{"value":"570 դր"}]'
priceValue = JSON.parse(priceValue)
items = JSON.parse(items)
let imageArray = JSON.parse(image)



let data = imageArray.map((elem,index)=>{
    return {
        ...elem,
        ...items[index],
        ...priceValue[index]
    }
}) 

let container = document.querySelector(".container")
let shop = document.querySelector(".shop")
let popUp = document.querySelector(".pop-up")
let searchInput = document.querySelector(".search-input")

data.forEach((item)=>{
    let section = document.createElement("div")
    section.classList.add("section")
    let image = document.createElement("img")
    let name = document.createElement("h3")
    let priceDiv = document.createElement("div")
    let controlButton = document.createElement("div")
    controlButton.classList.add("controlButton")
    let addDiv = document.createElement("div")
    let addButton = document.createElement("button")
    let heartDiv = document.createElement("div")
    heartDiv.innerHTML = `<i class="fa fa-heart" style="font-size:30px;color:red"></i>
    `
    heartDiv.classList.add("heart-div")
    heartDiv.addEventListener("click",()=>{
        heartDiv.classList.toggle("full-opacity")
    })
    addButton.innerText = "Ավելացնել"
    addDiv.append(addButton)
    addDiv.classList.add("addDiv")
    let popUpDiv = document.querySelector(".pop-up")
    addButton.addEventListener("click",(e)=>{
        let popContainer = document.createElement("div")
        popContainer.classList.add("pop-container")
        popContainer.innerHTML = `
        <img width="150" height="150" src=${e.target.parentElement.parentElement.firstChild.src}>
        <div>${e.target.parentElement.parentElement.firstChild.nextElementSibling.innerText}</div>
        <div>${e.target.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.innerText}</div>
        <div>${e.target.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.value}հատ</div>
        <div class="remove"><i class="fa fa-remove" style="font-size:24px"></i></i></div>
        `
        popUpDiv.append(popContainer)
        let remove = document.querySelectorAll(".remove")
        remove.forEach((item)=>{
            item.addEventListener("click",(e)=>{
                e.target.parentElement.parentElement.remove()
                shop.innerText =popUpDiv.children.length 
                if(popUpDiv.children.length ===0){
                    popUpDiv.style.display = "none"
                }
                
            })
        })
        shop.innerText =popUpDiv.children.length 
    })
    
    let span1 = document.createElement("span")
    span1.style.cursor = "pointer"
    span1.innerHTML = `<i class="fa fa-minus" style="font-size:24px"></i>`
    span1.addEventListener("click",(e)=>{
        let count = e.target.parentElement.nextElementSibling
        if(+count.value>1 ){
            count.value = +count.value - 1 + ""
        }
    })
    
    let input = document.createElement("input")
    input.classList.add("inpTovCount")
    input.value = "1"
    let span2 = document.createElement("span")
    span2.style.cursor = "pointer"
    span2.innerHTML = `<i class="fa fa-plus" style="font-size:24px"></i>`
    span2.addEventListener("click",(e)=>{
        let count = e.target.parentElement.previousElementSibling
        count.value = +count.value + 1 + ""
    })
    controlButton.append(span1,input,span2)
    priceDiv.innerText = item.value
    priceDiv.style.color = "#d32524"
    priceDiv.style.fontSize = "17px"
    priceDiv.style.marginTop = "17px"
    name.innerText = item.name
    image.style.width = "167px"
    image.style.height = "192px"
    image.setAttribute("src",`${item.src}`)
    section.append(image)
    section.append(name)
    section.append(priceDiv)
    section.append(controlButton)
    section.append(addDiv)
    section.append(heartDiv)
    container.append(section)
    
})
let productName = document.querySelectorAll(".section h3")
let productNames = [...productName].map((item)=>item.innerText)
searchInput.addEventListener("input",function (e) {
    if(searchInput.value){
        productNames.forEach((item,index)=>{
            if(!(item.toLowerCase().includes(searchInput.value.toLowerCase()))){
                productName[index].parentElement.style.display = "none"
            }
            else{
                productName[index].parentElement.style.display="flex"
            }
        })
    }
    else{
        productNames.forEach((item,index)=>{
            productName[index].parentElement.style.display="flex"
        })
    }
})


let popUpOn = true
shop.addEventListener("click",()=>{
    if(popUp.children.length){
        if(popUpOn){
            popUp.style.display = "block"
            popUpOn = false
        }else{
            popUp.style.display = "none"
            popUpOn = true
        }
    }
    
   
    
})