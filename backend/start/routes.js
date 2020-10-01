'use strict'

const Route = use('Route')

Route.resource('contato', 'ContatoController').apiOnly()
Route.resource('telefone', 'TelefoneController').apiOnly()
Route.get('contato/byid/:id', 'ContatoController.showById')
