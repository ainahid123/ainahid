let showMore = true;
document.getElementById("more").addEventListener("click", function(){
    if(showMore){
        document.getElementById("show").classList.remove("hidden");
        showMore = false;
    }else{
        document.getElementById("show").classList.add("hidden");
        showMore = true;
    }
})