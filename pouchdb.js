var db = new PouchDB('todo');

async function deleteDb() {

    try {

        const response = db.destroy();

        console.log(response);

    } catch (error) {
        console.log(error);
    }

}

async function create() {

    try {

        var params = {
            _id: new Date().toISOString(),
            text: 'My text is here...',
        }

        const response = await db.put(params);

        console.log(response);

    } catch (error) {
        console.log(error);
    }

}

async function remove(todo) {

    try {

        const response = await db.remove(todo);

        console.log(response);

    } catch (error) {
        console.log(error);
    }

}
