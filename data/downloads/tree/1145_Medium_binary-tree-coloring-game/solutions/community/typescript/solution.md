# Easy Explained JS / TS Solution

**Author:** eddyhdzg
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/1101996/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/1101996/)

---

Explanation:
So basically your best shot as the "y" player, is to get either
* The parent node of the xNode
* The left node of the xNode
* The right node of the xNode

Steps:
1. Find the xNode (the node that your opponent chose)
2. Count the left nodes
3. Count the right nodes
4. Count the parent nodes (all but the tree of your opponent)
5. Get Max(left,right,parent)
6. Check if your max is bigger than your opponent count. 
(you can also do **"y > n / 2"** because you must have more than half of the total amount of nodes)

```
// JS
var btreeGameWinningMove = function (root, n, x) {
  const count = (node) => {
    if (!node) return 0;
    return count(node.left) + count(node.right) + 1;
  };

  const find = (node) => {
    if (!node) return false;
    if (node.val === x) return node;
    return find(node.left) || find(node.right);
  };

  const xNode = find(root);
  const left = count(xNode.left);
  const right = count(xNode.right);
  const parent = n - left - right - 1;
  const y = Math.max(left, right, parent);

  return y > n - y;
};
```

```
// TS
function btreeGameWinningMove(
  root: TreeNode | null,
  n: number,
  x: number
): boolean {
  const count = (node: TreeNode | null): number => {
    if (!node) return 0;
    return count(node.left) + count(node.right) + 1;
  };

  const find = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;
    if (node.val === x) return node;
    return find(node.left) || find(node.right);
  };

  const xNode = find(root);
  const left = count(xNode!.left);
  const right = count(xNode!.right);
  const parent = n - left - right - 1;
  const y = Math.max(left, right, parent);

  return y > n - y;
}
```

More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
