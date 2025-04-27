const Logger = require('../config')

class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const response = await this.model.create(data)
            return response
        } catch (error) {
            Logger.errpr("Something went wrong in crud-repository create method", error)
            throw error
        }   
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            })
        } catch (error) {
            Logger.error("Something went wrong in crud-repository destroy method", error)
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response
        } catch (error) {
            Logger.error("Something went wrong in crud-repository get method", error)
            throw error
        }
    }
        
    async getAll(){
        try {
            const response = await this.model.findAll()
            return response
        } catch (error) {
            Logger.error("Something went wrong in crud-repository getAll method", error)
            throw error
        }
    }
       
    async update(id, data){
        try {
            const response = await this.model.update(data, {
                where: {
                    id:id
                }
            })
            return response
        } catch (error) {
            Logger.error("Something went wrong in crud-repository update method", error)
        }
    }
}

model.exports = CrudRepository