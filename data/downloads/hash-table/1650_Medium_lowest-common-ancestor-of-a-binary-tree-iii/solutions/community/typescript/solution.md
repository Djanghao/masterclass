# Super easy while loop solution

**Author:** yanagita
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4758260/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4758260/)

---

# Intuition
My first intuition was to do a search for each starting from the root.  However, as others point out, there is no root node.  So that actually makes it easier
# Approach
What I did was start from each node and then just traverse the parent nodes of each until you hit a null node (above the root node)

During the traversal, we save the pointers into a set. As we traverse the parents, we can just check `Set.has()` to see if we've already come across the node.  Return on the first duplicate as that means that node is the lowest common ancestor.

# Complexity
- Time complexity:
O(h): h being the height of the tree
- Space complexity:
O(h): h being the height of the tree

# Code
```
function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
    const ancestors = new Set<Node | null>()

    let pPointer = p
    let qPointer = q

    while (pPointer != null || qPointer != null) {
        if (pPointer != null) {
            if (ancestors.has(pPointer)) {
                return pPointer
            }
            ancestors.add(pPointer)
            pPointer = pPointer.parent
        }
        
        if (qPointer != null) {
            if (ancestors.has(qPointer)) {
                return qPointer
            }
            ancestors.add(qPointer)
            qPointer = qPointer.parent
        }
    }
    return null
};
```