# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/1932092/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/1932092/)

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
        var leftMost = root

        while leftMost?.left != nil {
            var head = leftMost
            while head != nil {
                head?.left?.next = head?.right
                if let next = head?.next {
                    head?.right?.next = next.left
                }
                head = head?.next
            }
            leftMost = leftMost?.left
        }

        return root
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.