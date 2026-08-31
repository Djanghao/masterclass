# Javascript 11 line simple solution

**Author:** liushuaimaya
**Votes:** 4
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/458850/](https://leetcode.com/problems/print-binary-tree/solutions/458850/)

---

```js
var printTree = function(root) {
    const getDepth = root => root ? Math.max(getDepth(root.left), getDepth(root.right)) + 1 : 0;
    const dep = getDepth(root);
    const res = Array(dep).fill(0).map(_ => Array(2 ** dep - 1).fill(""));
    const dfs = (root, lv = 1, index = 2 ** (dep - lv) - 1) => {
        if(!root) return;
        res[lv - 1][index] += root.val;
        dfs(root.left, lv + 1, index - 2 ** (dep - lv - 1));
        dfs(root.right, lv + 1, index + 2 ** (dep - lv - 1));
    };
    dfs(root);
    return res;
};