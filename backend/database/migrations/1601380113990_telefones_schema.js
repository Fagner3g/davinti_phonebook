'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TelefoneSchema extends Schema {
  up() {
    this.create('telefones', (table) => {
      table.increments()
      table
        .integer('contato_id', 14)
        .unsigned()
        .references('id')
        .inTable('contatoes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.varchar('telefone', 16)
      table.timestamps()
    })
  }

  down() {
    this.drop('telefones')
  }
}

module.exports = TelefoneSchema
