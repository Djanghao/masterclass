# Swift solution with Heap

**Author:** keitaito
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/5605988/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/5605988/)

---

Swift version of [harsh_ju_sharma's solution](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/2413832/java-explained-with-pictures-priority-queue-o-mn-log-mn-ttt/?envType=study-plan-v2&envId=google-spring-23-high-frequency). Kudos to harsh_ju_sharma!

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity -->
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import HeapModule

class Solution {

    struct Node: Hashable, Comparable {
        let r: Int
        let c: Int
        let v: Int

        static func < (lhs: Self, rhs: Self) -> Bool {
            lhs.v < rhs.v
        }
    }

    func minScore(_ grid: [[Int]]) -> [[Int]] {
        let rows = grid.count
        let cols = grid.first!.count

        var heap = Heap<Node>()

        for r in 0 ..< rows {
            for c in 0 ..< cols {
                heap.insert(Node(r: r, c: c, v: grid[r][c]))
            }
        }

        var rowMax = [Int](repeating: 0, count: rows)
        var colMax = [Int](repeating: 0, count: cols)
        var res = [[Int]](repeating: [Int](repeating: 0, count: cols), count: rows)

        while !heap.isEmpty {
            let node = heap.removeMin()

            let nodeRow = node.r
            let nodeCol = node.c
            let val = max(rowMax[nodeRow], colMax[nodeCol]) + 1
            res[nodeRow][nodeCol] = val
            rowMax[nodeRow] = val
            colMax[nodeCol] = val
        }

        return res
    }
}
```