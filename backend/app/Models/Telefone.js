'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Telefone extends Model {
  telefones() {
    return this.belongsTo('App/Model/Telefone')
  }
}

module.exports = Telefone
