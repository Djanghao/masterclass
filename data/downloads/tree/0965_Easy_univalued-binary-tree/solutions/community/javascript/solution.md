# Simple JavaScript recursive solution

**Author:** ValeriiVasin
**Votes:** 12
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/407236/](https://leetcode.com/problems/univalued-binary-tree/solutions/407236/)

---

```js
var isUnivalTree = function(root, value = root.val) {
  if (!root) {
    return true;
  }
  
  if (root.val !== value) {
    return false;
  }
  
  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};
```