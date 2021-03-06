'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contato extends Model {
  telefones() {
    return this.hasMany('App/Models/Telefone')
  }
}

module.exports = Contato
