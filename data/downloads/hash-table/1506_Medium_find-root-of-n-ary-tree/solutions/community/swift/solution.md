# [Swift] O(N) Time with O(1) Space solution

**Author:** sishar4
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/2216159/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/2216159/)

---

```
class Solution {
    func findRoot(_ tree: [Node]) -> Node? {
        guard tree.count > 0 else { return nil }
		
        // We want to find the node that is not a child of any other node
        var valueSum = 0
        for node in tree {
            valueSum += node.val
            for childNode in node.children {
                valueSum -= childNode.val
            }
        }
        for node in tree {
            if node.val == valueSum {
                return node
            }
        }
        return nil
    }
}