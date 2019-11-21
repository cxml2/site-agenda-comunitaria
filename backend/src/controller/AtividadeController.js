const mongoose = require("mongoose");
const Atividade = require("../model/AtividadeSchema");

class AtividadeController {
  async index(req, res) {
    const atividade = await Atividade.find();
    return res.json(atividade);
  }
  async store(req, res) {
    const atividade = await Atividade.create(req.body);
    return res.json(atividade);
  }
  async show(req, res) {
    const atividade = await Atividade.findById(req.params.id);
    return res.json(atividade);
  }
  async update(req, res) {
    const atividade = await Atividade.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(atividade);
  }
}
  module.exports = new AtividadeController();
