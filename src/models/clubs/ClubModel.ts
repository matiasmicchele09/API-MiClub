import { sequelize } from '../../config/database';
import { DataTypes } from 'sequelize';

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