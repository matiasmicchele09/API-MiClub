import { sequelize } from '../../config/database';
import { DataTypes } from 'sequelize';
import UserModel from '../users/UserModel';

const RolModel = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,        
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,                
    }    
}
,{
//    tableName: 'clubs',
    timestamps: false
}
);

RolModel.hasMany(UserModel,{
    foreignKey: 'id_club',
    sourceKey: 'id'
});

export default RolModel;    