var listcontainer = document.getElementById("listcontainer")
var todo = document.getElementById("todo")

function additem()
    {
        var listitem = document.createElement("li")
        listitem.innerHTML = todo.value + "<button onclick='deleteitem(event)'>Delete</button>"
        listcontainer.append(listitem)
    }

function deleteitem(event)
    {
        event.target.parentElement.remove()
    }