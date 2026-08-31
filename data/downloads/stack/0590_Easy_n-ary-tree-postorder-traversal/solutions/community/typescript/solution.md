# Simple Typescript solution

**Author:** jijVHt7rmQxBurg4WgMf
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/1593736/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/1593736/)

---

```
function postorder(root: Node | null): number[] {
    if (!root) return [];
    return [].concat(...root.children.map(postorder), root.val);
};
```