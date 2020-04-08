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
            name: "luiz paulo group",
            age: 21
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
