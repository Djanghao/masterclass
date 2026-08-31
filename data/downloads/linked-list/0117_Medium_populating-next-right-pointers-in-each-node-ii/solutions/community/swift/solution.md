# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/1932097/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/1932097/)

---

```
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var left: Node?
 *     public var right: Node?
 *	   public var next: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *         self.next = nil
 *     }
 * }
 */

class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the binary tree.
    //   - space: O(1), only constant space is used.

    func connect(_ root: Node?) -> Node? {
        guard let root = root else { return nil }
        
        var queue: [Node] = [root]
        while queue.count > 0 {
            var level: [Node] = []
            var prev: Node?
            
            for node in queue {
                if let left = node.left { level.append(left) }
                if let right = node.right { level.append(right) }
                if prev != nil { prev?.next = node }
                prev = node
            }
            
            queue = level
        }
        
        return root
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.