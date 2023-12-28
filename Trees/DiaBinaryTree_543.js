// 543. Diameter of Binary Tree

var diameterOfBinaryTree = function (root) {
  let Dia = 0;
  checkDiameter(root);
  console.log(Dia, "maindia");
  return Dia;

  function checkDiameter(node) {
    if (node === null) return 0;

    let lh = checkDiameter(node.left);
    let rh = checkDiameter(node.right);

    Dia = Math.max(Dia, lh + rh);

    console.log(Dia, "dia");

    return 1 + Math.max(lh, rh);
  }
};
