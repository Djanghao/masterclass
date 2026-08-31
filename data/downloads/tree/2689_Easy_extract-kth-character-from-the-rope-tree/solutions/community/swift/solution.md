# 2380ms / 100% / Accepted

**Author:** martinlasek
**Votes:** 0
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4793875/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4793875/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a rope tree node.
 * public class RopeTreeNode {
 *     var len: Int
 *     var val: String
 *     var left: RopeTreeNode?
 *     var right: RopeTreeNode?
 *     init(len: Int = 0, val: String = "", left: RopeTreeNode? = nil, right: RopeTreeNode? = nil) {
 *         self.len = len
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    var ans = ""

    func getKthCharacter(_ root: RopeTreeNode?, _ k: Int) -> Character {
        guard let tree = root else {
            return Character("")
        }
        
        traverse(tree)
        
        for (idx, el) in ans.enumerated() {
            if idx == k-1 {
                return el
            }
        }
        
        return Character("")
    }
    
    func traverse(_ tree: RopeTreeNode) {
        if !tree.val.isEmpty {
            ans = "\\(ans)\\(tree.val)"
        } else {
            if let left = tree.left {
                traverse(left)
            }

            if let right = tree.right {
                traverse(right)
            }
        }
    }
}
```