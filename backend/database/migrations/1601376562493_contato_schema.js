'use strict'

const Schema = use('Schema')

class ContatoSchema extends Schema {
  up() {
    this.create('contato', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('idade', 3)
      table.timestamps()
    })
  }

  down() {
    this.drop('contato')
  }
}

module.exports = ContatoSchema
