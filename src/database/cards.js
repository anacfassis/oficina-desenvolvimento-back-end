const db = require("./db");
const helper = require("./helper");

async function find() {
  const query = `SELECT * FROM cards LIMIT 100`;

  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);

  return {
    data, 
};
}

async function findOne() {
  /**
   * @todo get an specific card by id
   */
}

async function create({ name, type, desc, atk, def }) {
const query = "INSERT INTO cards(`name`, `type`, `desc`, `atk`, `def`) values (?, ?, ?, ?, ?)";
  const result = await db.query(query, [name, type, desc, atk, def]);
  const message = result.affectedRows
  ? "Card foi criado com sucesso"
  : "Erro ao criar card";
  return { message };
}
async function update(id, { name, type, desc, atk, def }) {
  const query = "UPDATE cards SET `name` = ?, `type` = ?, `desc` = ?, `atk` = ?, `def` = ? WHERE `id` = ?";	
  const result = await db.query(query, [name, type, desc, atk, def, id]);
  const message = result.affectedRows
  ? "Card foi atualizado com sucesso"
  : "Erro ao atualizar card";
  return { message };
}

async function remove(id) {
  /**
   * @todo delete an specific card
   */
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};
