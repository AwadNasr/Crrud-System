// var pName=document.getElementById('prodName')
// var pCateg=document.getElementById('prodCategory')
// var pPrice=document.getElementById('prodPrice')
// var pDesc=document.getElementById('prodDescription')
// var pSearch=document.getElementById('search')
// var adding=document.getElementById('addProd')
// var updating=document.getElementById('updateProd')
// var indexProduct=0
// var productBox=[];
// if(localStorage.getItem('allproduct')==null){
//     var productBox=[]
// }else{
//     productBox=JSON.parse(localStorage.getItem('allproduct')) 
//     display()
// }
// function addProduct(){
//     var product={
//         prodName:pName.value,
//         prodCategory:pCateg.value,
//         prodPrice:pPrice.value,
//         prodDescription:pDesc.value
//     }
//     productBox.push(product)
//     localStorage.setItem('allproduct',JSON.stringify(productBox))
//     display();
//     resete();
// }
// function display(){
//    var trs=``
//     for(var i=0;i<productBox.length;i++){
//         trs +=`
//         <tr>
//         <td>${i+1}</td>
//         <td>${productBox[i].prodName}</td>
//         <td>${productBox[i].prodCategory}</td>
//         <td>${productBox[i].prodPrice}</td>
//         <td>${productBox[i].prodDescription}</td>
//         <td><button class="btn btn-outline-warning" onclick="setUpdateData(${i})" ><i class="fa-solid fa-edit"></i></button></td>
//         <td><button class="btn btn-outline-danger" onclick="delet(${i})"><i class="fa-solid fa-trash"></i></button></td>
//         </tr>
//         `
//     }
//     document.getElementById('tableBody').innerHTML=trs;
// }
// function resete(){
//     pName.value=''
//     pCateg.value=''
//     pPrice.value=''
//     pDesc.value=''
// }
// function setUpdateData(index){
//     indexProduct=index
//     pName.value=productBox[index].prodName
//     pCateg.value=productBox[index].prodCategory
//     pPrice.value=productBox[index].prodPrice
//     pDesc.value=productBox[index].prodDescription
//     adding.classList.add('d-none')
//     updating.classList.remove('d-none')
// }
// function updateProduct(){
//     var product={
//         prodName:pName.value,
//         prodCategory:pCateg.value,
//         prodPrice:pPrice.value,
//         prodDescription:pDesc.value
//     }
//     productBox.splice(indexProduct,1,product)
//     localStorage.setItem('allproduct',JSON.stringify(productBox))
//     display()
//     resete()
//     updating.classList.add('d-none')
//     adding.classList.remove('d-none')
// }
// updating.onclick=function(){
//     updateProduct()
// }
// function search(){
//     var prodSearch=pSearch.value;
//     console.log(prodSearch);
   
//    var trs=``
//     for(var i=0;i<productBox.length;i++){
//         if(productBox[i].prodName.includes(prodSearch)){
//         trs +=`
//         <tr>
//         <td>${i+1}</td>
//         <td>${productBox[i].prodName.replaceAll(prodSearch,'<span>'+prodSearch+'</span')}</td>
//         <td>${productBox[i].prodCategory}</td>
//         <td>${productBox[i].prodPrice}</td>
//         <td>${productBox[i].prodDescription}</td>
//         <td><button class="btn btn-outline-warning"><i class="fa-solid fa-edit"></i></button></td>
//         <td><button class="btn btn-outline-danger" onclick="delet(${i})"><i class="fa-solid fa-trash"></i></button></td>
//         </tr>
//         `
//         }
//     }
//     document.getElementById('tableBody').innerHTML=trs;
// }
// function delet(index){
//     productBox.splice(index,1);
//     localStorage.setItem('allproduct',JSON.stringify(productBox))
//     display();
// }
//                             //  =============Validation===============
// function prodNameValidation(){
//     var prodNameRegex=/^[A-Z]+[a-zA-Z]*$/;
//     var prodName=pName.value;
//     if(prodNameRegex.test(prodName)){
//         return true
//     }else{
//         return false
//     }
// }
// function prodCategoryValidation(){
//     var prodCategoryRegex=/^[A-Z][a-z]{2,12}$/;
//     var prodCategory=pName.value;
//     if(prodCategoryRegex.test(prodCategory)){
//         return true
//     }else{
//         return false
//     }
// }
// function prodPriceValidation(){
//     var prodPriceRegex=/^[0-9]{1,9}$/;
//     var prodPrice=pPrice.value;
//     if(prodPriceRegex.test(prodPrice)){
//         return true
//     }else{
//         return false
//     }
// }
// adding.onclick=function(){
//     if(prodNameValidation()==true && prodCategoryValidation()==true && prodPriceValidation()==true ){
//         addProduct()
//     }else{
//         alert('enter a valid values')
//     }
    
// }


// =============Global======================
let inputs=document.querySelectorAll('input')
let desc=document.querySelector('textarea')
let addBtn=document.getElementById('addProd')
let clearBtn=document.getElementById('clear')
let productLists=[]
let indexProduct=0
//    ==========When Start =================
if(localStorage.getItem("allProducts")==null){
    let productLists=[]
}else{
    productLists=JSON.parse(localStorage.getItem("allProducts"))
    displayProducts()
}

//  ============Functions====================
function addProduct(){      
    let product={
        productName:inputs[0].value,
        productCategory:inputs[1].value,
        productPrice:inputs[2].value,
        productDescription:desc.value
    }
    productLists.push(product)
    localStorage.setItem("allProducts",JSON.stringify(productLists))
    displayProducts()
    resetProduct()
}
function displayProducts(){
    let trs=``
    for(let i=0;i<productLists.length;i++){
        trs +=`
        <tr>
         <td>${i+1}</td>
         <td>${productLists[i].productName}</td>
         <td>${productLists[i].productCategory}</td>
         <td>${productLists[i].productPrice}</td>
         <td>${productLists[i].productDescription}</td>
         <td><button class="btn btn-outline-warning"  onclick="UpData(${i})"><i class="fa-solid fa-edit"></i></button></td>
         <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})" ><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=trs;
}
function resetProduct(){
    inputs[0].value=''
    inputs[1].value=''
    inputs[2].value=''
    desc.value=''
}
function deleteProduct(index){
    productLists.splice(index,1)
    localStorage.setItem("allProducts",JSON.stringify(productLists))
    displayProducts()
}
function UpData(index){
    indexProduct=index
    inputs[0].value=productLists[index].productName;
    inputs[1].value=productLists[index].productCategory;
    inputs[2].value=productLists[index].productPrice;
    desc.value=productLists[index].productDescription;
    addBtn.classList.add('d-none')
    document.getElementById('updateProd').classList.remove('d-none')

}
function updateData(){
    let product={
        productName:inputs[0].value,
        productCategory:inputs[1].value,
        productPrice:inputs[2].value,
        productDescription:desc.value
    }
    productLists.splice(indexProduct,1,product)
    localStorage.setItem("allProducts",JSON.stringify(productLists))
    displayProducts()
    resetProduct()
    document.getElementById('updateProd').classList.add('d-none')
    addBtn.classList.remove('d-none')
}
// ==================Events===================
addBtn.addEventListener('click',()=>{
    if(prodNameValidation() && prodCategoryValidation() && prodPriceValidation){
        addProduct()
    }else{
        alert('Enter a Valid Data')
    }
})
clearBtn.addEventListener('click',resetProduct)
document.getElementById('updateProd').addEventListener('click',updateData)
// =====================Validation===========
function prodNameValidation(){
         var prodNameRegex=/^[A-Z]+[a-zA-Z]*$/
         if(prodNameRegex.test(inputs[0].value)){
             return true
         }else{
             return false
         }
     }
function prodCategoryValidation(){
         var prodCategoryRegex=/^[A-Z][a-z]{2,12}$/
        if(prodCategoryRegex.test(inputs[1].value)){
            return true
        }else{
            return false
        }
    }
function prodPriceValidation(){
        var prodPriceRegex=/^[0-9]{1,9}$/;
        if(prodPriceRegex.test(inputs[2].value)){
            return true
        }else{
            return false
        }
    }


