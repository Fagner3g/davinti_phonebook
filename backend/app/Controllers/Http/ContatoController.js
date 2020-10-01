'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Contato = use('App/Models/Contato')
const Telefone = use('App/Models/Telefone')

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
    const contatos = await Contato.query()
      .with('telefones')
      .orderBy('nome', 'asc')
      .fetch()

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
      const { nome, idade, telefones } = request.all()

      const contato = await Contato.create({
        nome: nome,
        idade: idade
      })

      if (telefones.length > 0) {
        telefones.forEach(async (element) => {
          if (element.telefone !== '')
            await Telefone.create({
              contato_id: contato.id,
              telefone: element.telefone
            })
        })
      }

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
  async update({ params, request, response }) {
    try {
      const { nome, idade, telefones } = request.all()

      const contato = await Contato.findOrFail(params.id)
      contato.merge({ nome, idade })
      await contato.save()

      telefones.forEach(async (el) => {
        if (el.telefone !== '') {
          if (el.id === '') el.id = 0.0
          const telefone = await Telefone.findOrCreate(
            { id: el.id },
            { telefone: '123456', contato_id: contato.id }
          )
          telefone.merge({
            telefone: el.telefone
          })

          telefone.save()
        } else if (el.id !== '') {
          const telefone = await Telefone.findOrFail(el.id)

          telefone.delete()
        }
      })

      return contato
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Algo deu errado ao atualizar seus dados' }
      })
    }
  }

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
