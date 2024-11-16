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
  async subscribe(cb) {
    // Subscribe to real-time changes in the userTrees table
    supabase
      .from("userTrees")
      // @ts-ignore
      .on("UPDATE", (payload) => {
        console.log("Change received!", payload);
        // Update the client-side state with the new tree health
        cb(payload.new);
      })
      .subscribe();
  }
}

module.exports = TreeService;
