# Lowest Common Ancestor, given a parent in Kotlin

**Author:** Axzra
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4267426/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4267426/)

---

```
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *		var left: TreeNode? = null
 *		var right: TreeNode? = null
 *		var parent: Node? = null
 * }
 */

class Solution {
    fun lowestCommonAncestor(p: Node?, q: Node?): Node? {
        if(p == null) return q
        if(q == null) return p

        val pAncestors = HashSet<Node?>()
        var pTemp = p
        while(pTemp != null) {
            pAncestors.add(pTemp)
            pTemp = pTemp?.parent
        }

        var qTemp = q
        while(!pAncestors.contains(qTemp)) {
            qTemp = qTemp?.parent
        }
        return qTemp
    }
}
```