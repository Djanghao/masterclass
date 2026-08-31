# JavaScript solution using DFS

**Author:** loctn
**Votes:** 18
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/102371/](https://leetcode.com/problems/binary-tree-tilt/solutions/102371/)

---

```
var findTilt = function(root) {
    const tilt = { val: 0 };
    dfs(root, tilt);
    return tilt.val;
};

function dfs(root, tilt) {
    if (!root) return 0;
    let left = dfs(root.left, tilt);
    let right = dfs(root.right, tilt);
    tilt.val += Math.abs(left - right);
    return root.val + left + right;
}
```