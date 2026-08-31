# LowestCommonAncestor - Easy solution

**Author:** MarcoKat
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4497873/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4497873/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) in the worst case and O(log n) best case

# Code
```
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var left: Node?
 *     public var right: Node?
 *     public var parent: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *         self.parent = nil
 *     }
 * }
 */

extension Node: Hashable, Equatable {
    public func hash(into hasher: inout Hasher) {
        hasher.combine(val)
    }
    public static func ==(lhs: Node, rhs: Node) -> Bool {
        return lhs.val == rhs.val
    }  
}

class Solution {
    func lowestCommonAncestor(_ p: Node?,_ q: Node?) -> Node? {
        var pPointer = p, qPointer = q
        var ancestors:Set<Node> = []
        
        while (pPointer != nil) {
            if let value = pPointer {
                ancestors.insert(value)   
                pPointer = value.parent
            }
        }

        while (qPointer != nil) {
            if let value = qPointer {
                if ancestors.contains(value) {
                    return qPointer
                }
                qPointer = value.parent
            }   
        }
        return nil
    }
}
```