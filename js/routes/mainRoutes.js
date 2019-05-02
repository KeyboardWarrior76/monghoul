const mainRoutes = (function() {

    require("./generate/_generateMain");
    require("./set/_setMain");
    require("./show/_showMain");
    require("./init/_init");
    require("./db/_dbMigrate");
    require("./db/_dbSeed");
    require("./db/_dbRollback");

} () );