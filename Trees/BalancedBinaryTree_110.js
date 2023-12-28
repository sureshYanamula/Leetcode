// 110. Balanced Binary Tree

var isBalanced = function (root) {
  if (root === null) return true;

  return checkHeight(root) !== -1;
};

const checkHeight = (root) => {
  if (root === null) return 0;

  let lh = checkHeight(root.left);

  if (lh === -1) return -1;

  let rh = checkHeight(root.right);

  if (rh === -1) return -1;

  if (Math.abs(rh - lh) > 1) return -1;

  return 1 + Math.max(lh, rh);
};
