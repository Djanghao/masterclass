# Easy to understand solution

**Author:** shubham_kamdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/4704370/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/4704370/)

---

# Code
```
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var children: [Node]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.children = []
 *     }
 * }
 */

class Solution {
    func diameter(_ root: Node?) -> Int {
        var diameter = 0
        func dfsHeight(_ root: Node?, _ prev: Node?) -> Int {
            var first = 0 
            for nei in root?.children ?? [] {
                if nei == prev { continue }
                var second = dfsHeight(nei,root) + 1 
                diameter = max(first + second,diameter)
                first = max(second,first)
            }
            return first
        }
        dfsHeight(root,nil)
        return diameter
    }
}
```