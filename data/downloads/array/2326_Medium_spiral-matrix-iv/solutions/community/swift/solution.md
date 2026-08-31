# Swift | Step by step

**Author:** pagafan7as
**Votes:** 3
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5758084/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5758084/)

---

# Code
```swift []
class Solution {
    func spiralMatrix(_ m: Int, _ n: Int, _ head: ListNode?) -> [[Int]] {
        // Make sure to fill the matrix with -1. From the problem:
        // "If there are remaining empty spaces, fill them with -1."
        var matrix = Array(repeating: Array(repeating: -1, count: n), count: m)

        // Start at the top-left of the matrix, facing right, and
        // start at the head of the linked list.
        var (r, c) = (0, 0), (dr, dc) = (0, 1)
        var node = head

        // Go through every node of the linked list, visiting the matrix
        // cells using the current direction, and rotating if necessary.
        while let current = node {
            matrix[r][c] = current.val

            // Try next position with the current direction.
            if !(0..<m).contains(r + dr) ||  // Out of bounds.
               !(0..<n).contains(c + dc) ||  // Out of bounds.
               matrix[r + dr][c + dc] != -1  // Already visited.
            {
                // The current direction did not work: rotate.
                (dr, dc) = (dc, -dr)
            }

            // Advance both in the matrix and the linked list.
            (r, c) = (r + dr, c + dc)
            node = current.next
        }

        return matrix
    }
}
```