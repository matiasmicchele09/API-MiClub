import { sequelize } from '../../config/database';
import { DataTypes } from 'sequelize';
import UserModel from '../users/UserModel';

const ClubModel = sequelize.define('clubs', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,                
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
    }    
}
,{
//    tableName: 'clubs',
    timestamps: false
}
);

export default ClubModel;