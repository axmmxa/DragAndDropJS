let todos = [
    {
        'id':0,
        'title': 'clean',
        'category': 'open'
    },

    {
        'id':1,
        'title': 'cook',
        'category': 'open'
    },

    {
        'id':2,
        'title': 'shopping',
        'category': 'closed'
    },
]

let currentDraggedElement

function updateHTML() {

    //container with category open
    let open = todos.filter(t => t['category'] == 'open')

    document.getElementById('open').innerHTML =''

    for( let index = 0; index < open.length; index++) {
        const element = open[index]
        document.getElementById('open').innerHTML += generateTodoHTML(element)
    }

    //container with category closed
    let closed = todos.filter(t => t['category'] == 'closed')

    document.getElementById('closed').innerHTML =''

    for( let index = 0; index < closed.length; index++) {
        const element = closed[index]
        document.getElementById('closed').innerHTML += generateTodoHTML(element)

    }

    
}

function startDragging(id) {
    currentDraggedElement = id
    console.log(currentDraggedElement)
}

function generateTodoHTML(element) {
    return `<div class="todo" draggable="true" ondragstart="startDragging(${element['id']})" >${element['title']}</div>`
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    todos[currentDraggedElement]['category'] = category // category will change
    updateHTML()
}