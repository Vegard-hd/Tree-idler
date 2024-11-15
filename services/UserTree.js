const supabase = require("../supabase");

class TreeService {
  async getOne(id) {
    let { data: userTrees, error } = await supabase.from("userTrees").select(`
      some_column,
      other_table (
        foreign_key
      )
    `);
    return userTrees;
  }
}

module.exports = TreeService;
