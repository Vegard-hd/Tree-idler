const supabase = require("../supabase");

class TreeService {
  async getOne(id) {
    let { data: trees, error } = await supabase
      // @ts-ignore
      .from("trees")
      .select("*")
      .eq("id", id);

    if (error) {
      throw error;
    }

    return trees;
  }
  async getAll() {
    let { data: trees, error } = await supabase
      // @ts-ignore
      .from("trees")
      .select("*");

    if (error) {
      throw error;
    }

    return trees;
  }
}

module.exports = TreeService;
