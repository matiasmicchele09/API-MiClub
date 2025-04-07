import { sequelize } from '../../config/database';
import { DataTypes } from 'sequelize';
import ClubModel from '../clubs/ClubModel';
import RolModel from '../roles/RolModel';

const UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,                
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_rol:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_club:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }  
}
,{
//    tableName: 'clubs',
    timestamps: false
}
);
              
export default UserModel;