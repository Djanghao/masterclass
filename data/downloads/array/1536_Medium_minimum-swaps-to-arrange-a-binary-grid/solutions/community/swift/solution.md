# Swift solution (bubble sort)

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/1236145/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/1236145/)

---

Solution explained in comments
```
class Solution {
    func minSwaps(_ grid: [[Int]]) -> Int {
        let n = grid.count
        var result = 0
        // For each row of the grid calculate the most right 1 in the grid in the array maxRight
        var maxRight = grid.reduce(into: [Int](), { $0.append($1.lastIndex(where: { $0 == 1 }) ?? 0) })
        // To check if there exist answer, sort maxRight and check if maxRight[i] \u2264 i for all possible i's
        for (i, v) in Array(0..<n).sorted(by: { maxRight[$0] < maxRight[$1] }).enumerated() where maxRight[v] > i {
            return -1
        }
        // An answer exists, let's simulate the swaps using bubble sort
        forrow1: for row1 in 0..<(n - 1) where maxRight[row1] > row1 { // for all rows that requires swap
            for row2 in (row1 + 1)..<n where maxRight[row2] <= row1 { // find nearest suitable row
                for row in stride(from: row2, to: row1, by: -1) { // apply swaps (bubble pops up)
                    maxRight.swapAt(row, row - 1)
                    result += 1
                }
                continue forrow1 // proceed next row
            }
        }
        return result
    }
}
```