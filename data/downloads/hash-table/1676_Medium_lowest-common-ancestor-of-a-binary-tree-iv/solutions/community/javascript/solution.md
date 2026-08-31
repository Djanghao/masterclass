# Javascript Solution DFS + Set

**Author:** ratiboi
**Votes:** 4
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/965079/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/965079/)

---

We traverse the tree any time a node is found in the traversal we return it and do not continue any further, because nodes below that node cannot not be it's ancestor. The returned node is passed upwards to its ancestors. If an ancestor has nodes in its left and rights descendants that are in the list, then it means that ancestor is the lowest ancestor of those nodes so we return the ancestor instead.

This question is similar to [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
The only difference is we are finding the LCA for a variable number of nodes in this question

```
var lowestCommonAncestor = function(root, nodes) {
    let set = new Set()
    nodes.forEach((n) => set.add(n.val))
    
    function traverse(root){
        if(!root) return
        if(set.has(root.val)) return root
        
        let left = traverse(root.left)
        let right = traverse(root.right)
        if(left && right) return root
        return left? left : right
    }
    return traverse(root)
};
```