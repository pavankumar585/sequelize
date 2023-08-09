async function getTodo(req, res) {
    res.json("Todo");
}

async function getTodos(req, res) {
    res.json("All Todos");
}

async function createTodo(req, res) {
    res.json("Todo Created");
}

async function updateTodo(req, res) {
    res.json("Todo Updated");
}

async function deleteTodo(req, res) {
    res.json("Todo Deleted");
}

module.exports.getTodo = getTodo;
module.exports.getTodos = getTodos;
module.exports.createTodo = createTodo;
module.exports.updateTodo = updateTodo;
module.exports.deleteTodo = deleteTodo;
