# JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 34
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/132982/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/132982/)

---

```
const zigzagLevelOrder = (root) => {
  let res = [];

  const go = (node, lvl) => {
    if (node == null) return;
    if (res[lvl] == null) res[lvl] = [];

    if (lvl % 2 === 0) {
      res[lvl].push(node.val);
    } else {
      res[lvl].unshift(node.val);
    }

    go(node.left, lvl + 1);
    go(node.right, lvl + 1);
  };

  go(root, 0);
  return res;
};
```
