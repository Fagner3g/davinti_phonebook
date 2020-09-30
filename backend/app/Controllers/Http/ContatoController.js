'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Contato = use('App/Models/Contato')

/**
 * Resourceful controller for interacting with contatoes
 */
class ContatoController {
  /**
   * Show a list of all contatoes.
   * GET contatoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const contatos = await Contato.query().with('telefones').fetch()

    return contatos
  }

  /**
   * Create/save a new contato.
   * POST contatoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only(['nome', 'idade'])

      const contato = await Contato.create({ ...data })

      return contato
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Algo deu errado ao atualizar seus dados' }
      })
    }
  }

  /**
   * Display a single contato.
   * GET contatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    let contatos = []
    if (isNaN(params.id))
      contatos = await Contato.query()
        .where(`nome`, 'ilike', '%' + params.id.toLowerCase() + '%')
        .fetch()
    else {
      contatos = await Contato.findOrFail(params.id)
      await contatos.load('telefones')
    }

    return contatos
  }

  /**
   * Update contato details.
   * PUT or PATCH contatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a contato with id.
   * DELETE contatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    try {
      const contato = await Contato.findOrFail(params.id)

      await contato.delete()
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Não conseguimos encontrar o id do telefone.' }
      })
    }
  }
}

module.exports = ContatoController
