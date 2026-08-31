# Simple and clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 27
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/395586/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/395586/)

---

```
// e.g.
//    1
//   / \\
//  2   3
//     / \\
//    4   5
//
// data = [1, 2, null, null, 3, 4, null, null, 5, null, null]

function serialize(root) {
  let data = [];

  function go(node) {
    if (node == null) {
      data.push(null);
      return;
    }

    data.push(node.val);
    go(node.left);
    go(node.right);
  }

  go(root);
  return data;
}

function deserialize(data) {
  function go() {
    if (data.length === 0) return;

    const val = data.shift();
    if (val == null) return null;

    const node = new TreeNode(val);
    node.left = go();
    node.right = go();
    return node;
  }

  return go();
}
```
