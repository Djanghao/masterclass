# JavaScript Solution

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-bst/solutions/872960/](https://leetcode.com/problems/split-bst/solutions/872960/)

---

Kind of proud of this answer because its something I was able to come up with on my own (although not within like 45 minutes window). Please let me if you have any comments for improvements or if I made a mistake. Thank you.

```
var splitBST = function(root, V) {
    if (root == null) return [null, null];
    
    if (root.val <= V) {
        const [lessThan, greaterThan] = splitBST(root.right, V);
        root.right = lessThan;
        return [root, greaterThan];
    }
    else {
        const [lessThan, greaterThan] = splitBST(root.left, V);
        root.left = greaterThan;
        return [lessThan, root];
    };
};
```