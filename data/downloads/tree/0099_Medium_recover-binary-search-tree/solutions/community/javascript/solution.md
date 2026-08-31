# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 13
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/448583/](https://leetcode.com/problems/recover-binary-search-tree/solutions/448583/)

---

### The Idea
1. In-order dfs traverse the tree in ascending order (very Important)
2. Save a record of the previous node, if the current node is smaller than the previous node, that means we've found 2 potential elements that will be swapped.
3. Out of the 2 potential elements, we are sure that the bigger one must be swapped, however, the smaller one aren't sure, so we need to continue the dfs.
*The idea of the swapping mechanism is exactly the same in "sorting an almost sorted array"
``` javascript
var recoverTree = function(root) {
    let prev = null, big = null, small = null;
    let dfs = function(root) {
        if (!root) return;
        dfs(root.left);
        if (prev != null && prev.val > root.val) {
            small = root; // potential smaller number that needs to be swapped
            if (!big) big = prev; // assured bigger number that needs to be swapped
            else return;
        }
        prev = root;
        dfs(root.right);
    }
    
    dfs(root);
    [big.val, small.val] = [small.val, big.val];
};
```