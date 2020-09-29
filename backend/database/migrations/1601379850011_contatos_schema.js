'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatosSchema extends Schema {
  up() {
    this.create('contatoes', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('idade', 3)
      table.timestamps()
    })
  }

  down() {
    this.drop('contatoes')
  }
}

module.exports = ContatosSchema
