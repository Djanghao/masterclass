# Short and clear JavaScript solution building left, bottom, then right

**Author:** loctn
**Votes:** 5
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/101287/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/101287/)

---

```
var boundaryOfBinaryTree = function(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];
    const res = [root.val];
    buildSide(root.left, 'left', res);
    buildBottom(root, res);
    const right = [];
    buildSide(root.right, 'right', right);
    return [...res, ...right.reverse()];
};

function buildSide(root, side, res) {
    if (!root) return;
    if (root.left || root.right) res.push(root.val);
    if (root[side]) buildSide(root[side], side, res);
    else buildSide(root[side === 'left' ? 'right' : 'left'], side, res);
}

function buildBottom(root, res) {
    if (!root) return;
    if (!root.left && !root.right) res.push(root.val);
    buildBottom(root.left, res);
    buildBottom(root.right, res);
}
```