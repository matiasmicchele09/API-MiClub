// models/associations.ts
import UserModel from './users/UserModel';
import RolModel from './roles/RolModel';
import ClubModel from './clubs/ClubModel';

UserModel.belongsTo(RolModel, 
    { 
        foreignKey: 'id_rol',
        targetKey: 'id'
    }
);

RolModel.hasMany(UserModel, 
    { 
        foreignKey: 'id_rol', 
        sourceKey: 'id'
    }
);

UserModel.belongsTo(ClubModel, 
    { 
        foreignKey: 'id_club', 
        targetKey: 'id' 
    }
);

ClubModel.hasMany(UserModel,
    {
        foreignKey: 'id_club',
        sourceKey: 'id'
    }
);
    
// y si ClubModel.hasMany(UserModel) también, agregalo aquí

export {
  UserModel,
  RolModel,
  ClubModel,
};
