const supabase = require("../supabase");

class TreeService {
  async getOne(userId, treeId) {
    let { data: userTree, error } = await supabase
      .from("userTrees")
      .select("health, price")
      .eq("user_id", userId)
      .eq("tree_id", treeId)
      .single();

    if (error) {
      throw error;
    }

    return userTree;
  }

  //todo: create userTree with tree and user_id reference

  async createTree() {
    const { data, error } = await supabase
      .from("userTrees")
      .insert([{ some_column: "someValue", other_column: "otherValue" }])
      .select();
    if (error) {
      throw error;
    }

    return data;
  }

  async updateHealth(userId, treeId, newHealth) {
    let { data, error } = await supabase
      .from("userTrees")
      .update({ health: newHealth })
      .eq("user_id", userId)
      .eq("tree_id", treeId);

    if (error) {
      throw error;
    }

    return data;
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
