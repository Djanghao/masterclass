# Simple recursive JavaScript solution

**Author:** w3irdfish3s
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/428478/](https://leetcode.com/problems/maximum-binary-tree/solutions/428478/)

---

```javascript
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) return null;
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    let head = new TreeNode(max);
    head.left = constructMaximumBinaryTree(nums.slice(0, index));
    head.right = constructMaximumBinaryTree(nums.slice(index + 1));
    return head;
};
```