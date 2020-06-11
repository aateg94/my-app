const {getAllEmployee,getEmployeeById,addEmployee,updateEmployee,deleteEmployee} = require('../controllers/controller');


const setupRoutes = (app) => {

    // 5. إعدا د طرق مختلفة | setup the different routes (get, post, put, delete)

    app.get("/employee", getAllEmployee)

    app.get("/employee/:id", getEmployeeById)

    app.post("/employee", addEmployee)

    app.put("/employee/:id", updateEmployee)

    app.delete("/employee/:id", deleteEmployee)
}
// 3. تصدير الوحدة | export the module
module.exports = setupRoutes;
