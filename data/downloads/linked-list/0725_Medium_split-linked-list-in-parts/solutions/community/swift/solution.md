# Swift | Chunky Solution 😊

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/5753028/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/5753028/)

---

# Code
```swift []
import Algorithms

class Solution {
    func splitListToParts(_ head: ListNode?, _ k: Int) -> [ListNode?] {
        // Input:                  [1,2,3,4,5,6,7,8,9,10]
        // unlink               => [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
        // evenlyChunked(in: 3) => [[[1],[2],[3],[4]], [[5],[6],[7]], [[8],[9],[10]]]
        // link (each chunk)    => [[1,2,3,4], [5,6,7], [8,9,10]]

        var nodes = unlink(head)
        let chunks = nodes.evenlyChunked(in: k)
        return chunks.map { Array($0) }.map(link)

        // Converts a linked list into an array of nodes.
        func unlink(_ head: ListNode?) -> [ListNode] {
            var res: [ListNode] = []
            var node = head
            while let current = node {
                res.append(current)
                node = current.next
                current.next = nil
            }
            return res
        }

        // Converts an array of nodes into a linked list.
        func link(_ nodes: [ListNode]) -> ListNode? {
            for (a, b) in nodes.adjacentPairs() { a.next = b }
            return nodes.first
        }
    }
}
```