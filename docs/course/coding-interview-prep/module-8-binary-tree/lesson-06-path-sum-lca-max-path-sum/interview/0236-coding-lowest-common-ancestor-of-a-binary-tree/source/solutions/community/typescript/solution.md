# TypeScript Depth First Search

**Author:** adampjl
**Votes:** 4
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/4052556/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/4052556/)

---

# Intuition
Given the guarantees of the this problem
1. q exists
2. p exists
3. LCA always exists
4. LCA can be p or q

We can logically break down the LCA into 3 possibilities
1. LCA = node that has 1 of P or Q in it's left subtree, and 1 of P or Q in it's right subtree. Meaning, that there is no path from P -> Q or Q -> P.
2. LCA = P, meaning that there is a path in the tree from P -> Q
3. LCA = Q, meaning there is a path in the tree from Q -> P.

# Approach
So the recursive algorthim goes like this,

Let's say we are looking at node Y, we ask ourselves,
1. can we reach p or q in the left sub tree?
2. can we reach p or q in the right sub tree?

```
if (canReachLeft && canReachRight) {
    node Y is answer;
}

return canReachLeft || canReachRight;
```

If we can reach p or q in the left and the right, then clearly we are in the above case 1 where LCA = node y.

Otherwise, if we can reach p or q from only left or right, we are in cases 2 or 3, and we just need to return the node that could reach p or q.



# Complexity
- Time complexity:
O(N), in the worst case, the tree is unbalanced and skewed in one direction and we must visit the entire tree.

- Space complexity:
O(N), same reason as above, because we could have the whole tree on the stack.

# Code
```
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null)
        return null;

    if (root === p || root === q)
        return root;

    const left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
    const right: TreeNode | null = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null)
        return root;
    
    return left || right;
};
```