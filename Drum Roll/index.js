var drumelement = document.querySelectorAll(".drum").length;

for (var i =0;i<drumelement;i++){

    document.querySelectorAll(".drum")[i].addEventListener('click',handleclick);
    
    function handleclick(){
        alert('I got clicked');
    }
}
