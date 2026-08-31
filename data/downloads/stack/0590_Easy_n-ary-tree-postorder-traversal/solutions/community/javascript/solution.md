# JavaScript Iterative & Recursive

**Author:** hon9g
**Votes:** 23
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/529596/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/529596/)

---

### Iteravtive Post-order Traverse
- Time Complexity: **O(N)**
- Space Complexity: **O(N)**
```JavaScript
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [], stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        if (!curr) continue;
        res.push(curr.val);
        stack.push(...curr.children);
    }
    return res.reverse();
};
```
### Recursive Post-order Traverse
- Time Complexity: **O(N)**
- Space Complexity:
    - **O(log N)** in average case.
    - **O(N)** in worst case, that there is an unbalanced tree.
```JavaScript
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        for(child of node.children) {
            traverse(child);
        }
        res.push(node.val);
    } 
};
```