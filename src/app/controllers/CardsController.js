// import { produtos } from "../../database/products";

const cards = require("../../database/cards");

class CardsController {
  async show(request, response) {
    /**
     * @todo get an specific card
     */
  }

  async list(request, response) {
   try {
      const card = await cards.find();
      response.json(card);
   } catch (error) {
     response.json({erro: "Erro ao listar os cards"});
   }
  }

  async create(request, response) {
   const { name, type, desc, atk, def } = request.body;
    const card = {
    name,
    type,
    desc,
    atk,
    def,
    };
    try {
    const restult = await cards.create(card);
    return response.json(restult);
    } catch (erro) {
    return response.json({ erro: "Erro ao criar card" });
    }
    }

  async update(request, response) {
    const { id } = request.params;
    const { name, type, desc, atk, def } = request.body;
    const updatedCard = {
    name,
    type,
    desc,
    atk,
    def,
    };
    try {
      const restult = await cards.update(id, updatedCard);
      return response.json(restult);
      } catch (erro) {
      return response.json({ erro: "Erro ao atualizar card" });
      }
  }

  async delete(request, response) {
    
}


async show(request, response) {
 
}

module.exports = new CardsController();


