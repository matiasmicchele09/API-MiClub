// Para que todas las clases que esten aca se puedan reutilizar.

export default class GenericRepository{

    //TODO: ¿Debería ser private?
    model: any;

    constructor(model: any){
        this.model = model;
    }

    async getAll(){
        return this.model.findAll();
    }

    async getById(id: number){
        return await this.model.findByPk(id);
    }
/*
    async create(data){
        return this.model.create(data);
    }

    async update(id, data){
        return this.model.update(data, {where: {id}});
    }

    async delete(id){
        return this.model.destroy({where: {id}});
    }*/
}