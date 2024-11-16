var express = require("express");
var router = express.Router();

const TreeService = require("../../services/Tree");
const treeService = new TreeService();
/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    let id = 1;
    const tree = await treeService.getOne(id);
    res.status(200).send(tree).end();
  } catch (error) {
    next(error);
  }
});

// Function to update the tree health on the client-side
function updateTreeHealth(newData) {
  // Implement your logic to update the tree health in the game
  console.log("Updated tree health:", newData);
}

module.exports = router;
