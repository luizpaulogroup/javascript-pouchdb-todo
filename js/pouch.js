var db = new PouchDB('todo');

/* Retorna código 13 quando usuário deu enter no campo  */
const KEY_CODE = 13;

var input = document.getElementById('text');
var error = document.getElementById('error');
var ul = document.getElementById('ul-todo');
var totalRows = document.getElementById('totalRows');

input.addEventListener('keypress', function (event) {

    if (event.keyCode === KEY_CODE) {

        if (!this.value) {
            error.innerHTML = "Informe o que precisa ser feito";
            return;
        }

        create(this.value);

        this.value = null;

        error.innerHTML = "";

    }

});

async function create(text) {

    try {

        var params = {
            _id: new Date().toISOString(),
            text,
        }

        const response = await db.put(params);

        console.log(response);

        get();

    } catch (error) {
        console.log(error);
    }

}

get();

function _renderUI(rows) {

    ul.innerHTML = '';

    rows.forEach(({ doc }) => {

        let li = document.createElement('li');

        li.innerHTML = doc.text;

        let button = document.createElement('button');

        button.className = 'button-remove';
        button.innerText = "Deletar";
        button.addEventListener('click', remove.bind(this, doc));

        li.appendChild(button);

        ul.appendChild(li);

    });

}

async function get() {

    try {

        const response = await db.allDocs({ include_docs: true, descending: true });

        const { total_rows, rows } = response;

        _renderUI(rows);

        totalRows.innerHTML = total_rows;


    } catch (error) {
        console.log(error);
    }

}

async function remove(todo) {

    try {

        const response = await db.remove(todo);

        console.log(response);

        get();

    } catch (error) {
        console.log(error);
    }

}


async function deleteDb() {

    try {

        const response = db.destroy();

        console.log(response);

    } catch (error) {
        console.log(error);
    }

}
