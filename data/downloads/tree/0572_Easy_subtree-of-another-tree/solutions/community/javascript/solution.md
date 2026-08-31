# Concise JavaScript solution using DFS

**Author:** loctn
**Votes:** 43
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/102810/](https://leetcode.com/problems/subtree-of-another-tree/solutions/102810/)

---

```
var isSubtree = function(s, t) {
    if (!s) return !t;
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(root1, root2) {
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;
    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}
```