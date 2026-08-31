# 2-Line Javascript/Typescript Solution

**Author:** wentland
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376596/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376596/)

---

# Code
```typescript
// short version
const tree2str = ({ val: v, left: l, right: r }: TreeNode) =>
  `${v}${l ? `(${tree2str(l)})` : r ? "()" : ""}${r ? `(${tree2str(r)})` : ""}`;
```
```typescript
// SUPER readable version
const tree2str = (node: TreeNode): string => {
  if (!node.left && !node.right) return node.val.toString();
  if (!node.right) return `${node.val}(${tree2str(node.left)})`;
  if (!node.left) return `${node.val}()(${tree2str(node.right)})`;
  return `${node.val}(${tree2str(node.left)})(${tree2str(node.right)})`;
};
```