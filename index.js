var list = document.querySelector('#list')
var newItem = document.getElementById('new-todo')
var modeElem = document.getElementById('mode-icon')

var id = 0;
var itemArr = [];
var completed = [];
var active = [];
var darkMode = false;
var button_state = 'All';
document.getElementById('remaining-items').innerHTML = `${itemArr.length} items  left`
document.getElementById('header').classList.add('light-mode')
modeElem.classList.add('icon-light')

modeElem.addEventListener('click', function () {
    darkMode = !darkMode;
    if (darkMode) {
        document.getElementById('header').classList.remove('light-mode');
        document.getElementById('header').classList.add('dark-mode');
        modeElem.classList.remove('icon-light');
        modeElem.classList.add('icon-dark');
        document.body.style.background = "hsl(235, 21%, 11%)";
        document.getElementById('list').style.background = "hsl(235, 24%, 19%)";
        document.getElementById('list').style.color = "hsl(0, 0%, 98%)";
        document.getElementById('new-item').style.background = "hsl(235, 24%, 19%)";
        document.getElementById('taskbar').style.background = "hsl(235, 24%, 19%)";
    } else {
        document.getElementById('header').classList.remove('dark-mode');
        document.getElementById('header').classList.add('light-mode');
        modeElem.classList.remove('icon-dark');
        modeElem.classList.add('icon-light');
        document.body.style.background = "hsl(0, 0%, 98%)";
        document.getElementById('list').style.background = "hsl(0, 0%, 98%)";
        document.getElementById('list').style.color = "hsl(235, 24%, 19%)"
        document.getElementById('new-item').style.background = "hsl(0, 0%, 98%)";
        document.getElementById('taskbar').style.background = "hsl(0, 0%, 98%)";
    }
})

newItem.addEventListener('keypress', function (event) {
    if (event.keyCode != 13)
        return

    var value = document.querySelector('#new-todo').value;
    var checkbox = `<div class="round"><input type="checkbox" id="${id}" /><label for="${id}"></label></div>`
    var str = `<div id="list_${id}"class="items">${checkbox} <li id="items_${id}">${value}<button id="button_${id}"class="close"></button></li></div>`
    itemArr.push(str)
    list.innerHTML = itemArr.join("");
    console.log(itemArr);
    (function () {
        for (let i = 0; i <= id; i++) {
            document.getElementById(`${i}`).addEventListener('click', function () {
                if (document.getElementById(`${i}`).checked) {
                    document.getElementById(`items_${i}`).classList.add('completed');
                    itemArr[i] = document.getElementById(`items_${i}`).parentNode.outerHTML
                    completed.push(itemArr[i])
                    document.getElementById('remaining-items').innerHTML = `${itemArr.length - completed.length} items  left`
                
                    if(button_state === 'Active'){
                        document.getElementById(`list_${i}`).style.display = "none";
                    }
                }
                else {
                    document.getElementById(`items_${i}`).classList.remove('completed');
                    completed.splice(completed.indexOf(itemArr[i]), 1)
                    itemArr[i] = document.getElementById(`items_${i}`).parentNode.outerHTML
                    document.getElementById('remaining-items').innerHTML = `${itemArr.length - completed.length} items  left`
               
                    if(button_state === 'Completed'){
                        document.getElementById(`list_${i}`).style.display = "none";
                    }
                }

            })

            document.getElementById(`list_${i}`).addEventListener('mouseover',function(){
                document.getElementById(`button_${i}`).classList.add('show-close-icon')
            })
            document.getElementById(`list_${i}`).addEventListener('mouseleave',function(){
                document.getElementById(`button_${i}`).classList.remove('show-close-icon')
            })

            document.getElementById(`button_${i}`).addEventListener('click',function(){
               // document.getElementById(`list_${i}`).style.display = "none";
                document.getElementById(`list_${i}`).remove();
                id--;
              
                var toBeDeleted=itemArr.splice(i,1)
               if(completed.indexOf(toBeDeleted[0]) > -1)
                   completed.splice(completed.indexOf(toBeDeleted[0]),1)
                document.getElementById('remaining-items').innerHTML = `${itemArr.length - completed.length} items  left`

            })


        }
    })()


    id++;

    newItem.value = ""

    if (!document.getElementById('list').classList.length)
        document.getElementById('list').classList.add("list")

   

    document.getElementById('remaining-items').innerHTML = `${itemArr.length - completed.length} items  left`

})

var completedButton = document.getElementById('completed-button');
completedButton.addEventListener('click', function () {
    button_state = 'Completed'
    for (i in itemArr) {
        if(itemArr[i] === null)
            return
        if (completed.indexOf(itemArr[i]) === -1) {
            document.getElementById(`list_${i}`).style.display = "none";
        } else if(document.getElementById(`list_${i}`)) {
            document.getElementById(`list_${i}`).style.display = "";
        }
    }

})

var allButton = document.getElementById('all-button');
allButton.addEventListener('click', function () {
    button_state = 'All'
    for (i in itemArr) {
        if(itemArr[i] === null)
            return
        if(document.getElementById(`list_${i}`))
            document.getElementById(`list_${i}`).style.display = "";
    }
})

var activeButton = document.getElementById('active-button');
activeButton.addEventListener('click', function () {
    button_state = 'Active'
    if(itemArr[i] === null)
    return
    for (i in itemArr) {
        if (completed.indexOf(itemArr[i]) > -1) {
            document.getElementById(`list_${i}`).style.display = "none";
        } else if(document.getElementById(`list_${i}`)){
            document.getElementById(`list_${i}`).style.display = "";
        }
    }

})



