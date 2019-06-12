let mainArray = [];

if(localStorage.getItem('task')!==null){
    mainArray=JSON.parse(localStorage.getItem('task'));
    outTaskFirstTime();
}
else{
    emptyArray();
}
function emptyArray() {
    return console.log('array is empty');
}

function addTask() {
    let inputNameField = document.getElementById('add_task_value').value;
    if (inputNameField === '') {
        alert('input name value');
    }
    else {
        //give task id
        let taskId = 0;
        if (mainArray.length>=1){
            mainArray.forEach((element, index) => {
                if(element === inputNameField){
                    taskId = index;
                }
            });
        }
        else{
            taskId = 0;
        }


        mainArray.push(inputNameField);
        localStorage.setItem('task', JSON.stringify(mainArray));
        //create task
        let parent_elem = document.getElementById('task_list');

        let createTaskBlock = document.createElement('div');
        createTaskBlock.className = 'task_block';
        createTaskBlock.id = 'task'+taskId;
        let createTask = document.createElement('div');
        createTask.className = 'task';

        let createCheckbox = document.createElement('input');
        createCheckbox.type = 'checkbox';
        let createName = document.createElement('p');
        createName.textContent = inputNameField;
        let createDelete = document.createElement('button');
        createDelete.textContent = 'delete';

        createDelete.id = 'delete'+taskId;

        let createChange = document.createElement('span');
        createChange.className = 'change_element';

        let createInputChange = document.createElement('input');
        createInputChange.type = 'text';
        createInputChange.placeholder = 'change task';
        let createChangeButton = document.createElement('button');
        createChangeButton.textContent = 'change';
        createChangeButton.id = 'change'+ taskId;

        let createHr = document.createElement('hr');

        parent_elem.appendChild(createTaskBlock);
        createTaskBlock.appendChild(createTask);
        createTask.appendChild(createCheckbox);
        createTask.appendChild(createName);
        createTask.appendChild(createDelete);
        createTask.appendChild(createChange);
        createChange.appendChild(createInputChange);
        createChange.appendChild(createChangeButton);
        parent_elem.appendChild(createHr);
    }
}

function outTaskFirstTime() {
    if(mainArray.length>=1){
        mainArray.forEach((element, index)=>{
            let parent_elem = document.getElementById('task_list');

            let createTaskBlock = document.createElement('div');
            createTaskBlock.className = 'task_block';
            let createTask = document.createElement('div');
            createTask.className = 'task';
            createTaskBlock.id = 'task'+index;

            let createCheckbox = document.createElement('input');
            createCheckbox.type = 'checkbox';
            createCheckbox.onclick = doneTask;
            let createName = document.createElement('p');
            createName.textContent = element;
            let createDelete = document.createElement('button');
            createDelete.textContent = 'delete';
            createDelete.id = 'delete'+index;
            createDelete.onclick = deleteTask;

            let createChange = document.createElement('span');
            createChange.className = 'change_element';

            let createInputChange = document.createElement('input');
            createInputChange.type = 'text';
            createInputChange.placeholder = 'change task';
            let createChangeButton = document.createElement('button');
            createChangeButton.textContent = 'change';
            createChangeButton.id = 'change'+ index;

            let createHr = document.createElement('hr');

            parent_elem.appendChild(createTaskBlock);
            createTaskBlock.appendChild(createTask);
            createTask.appendChild(createCheckbox);
            createTask.appendChild(createName);
            createTask.appendChild(createDelete);
            createTask.appendChild(createChange);
            createChange.appendChild(createInputChange);
            createChange.appendChild(createChangeButton);
            parent_elem.appendChild(createHr);
        });
    }
}

function deleteTask() {

    mainArray.splice(this.parentNode.parentNode.id, 1);
    localStorage.setItem('task', JSON.stringify(mainArray));

    let elId = document.getElementById(this.parentNode.parentNode.id);
    elId.remove();

    console.log();
}

function doneTask() {
    document.getElementById(this.parentNode.parentNode.id).style.textDecoration = 'line-through';
}


