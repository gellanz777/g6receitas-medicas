import { Sequelize } from "sequelize";

const banco = new Sequelize('g6_receitas', 'postgres', 'angelo', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});
export default banco;
