'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Telefone = use('App/Models/Telefone')

class TelefoneController {
  /**
   * Create/save a new telefone.
   * POST telefones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['contato_id', 'telefone'])

    if (data.contato_id === null) {
      return response
        .status(401)
        .send({ error: { message: 'Código do contato é obrigatório' } })
    }

    const telefone = await Telefone.create({ ...data })

    return telefone
  }

  /**
   * Display a single telefone.
   * GET telefones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update telefone details.
   * PUT or PATCH telefones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const telefone = await Telefone.findOrFail(params.id)

      const data = request.only(['contato_id', 'telefone'])

      if (data.contato_id === null) {
        return response
          .status(401)
          .send({ error: { message: 'Código do contato é obrigatório' } })
      }

      telefone.merge(data)

      await telefone.save()

      return telefone
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Algo deu errado ao atualizar seus dados' }
      })
    }
  }

  /**
   * Delete a telefone with id.
   * DELETE telefones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    try {
      const telefone = await Telefone.findOrFail(params.id)

      await telefone.delete()
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Não conseguimos encontrar o id do telefone.' }
      })
    }
  }
}

module.exports = TelefoneController
