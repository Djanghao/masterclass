# ✅ Clean swift solution — O(1) memory

**Author:** kulizhnikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5152482/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5152482/)

---

# Approach
Ensure the most significant bit of each row is set to 1 by possibly inverting entire rows. Then, maximize the matrix score by aligning the columns. This is achieved by checking each column from left to right and ensuring the bits in each column match their corresponding bit in the first column, maximizing the number of 1s.

# Complexity
- Time complexity: O(n * m)

- Space complexity: O(1)

# Code
```
class Solution {
    func matrixScore(_ grid: [[Int]]) -> Int {
        let m = grid.count
        let n = grid[0].count

        var answer = (1 << (n - 1)) * m

        for j in 1..<n {
            var sameBitsCount = 0
            for i in 0..<m where grid[i][j] == grid[i][0] {
                sameBitsCount += 1
            }

            sameBitsCount = max(sameBitsCount, m - sameBitsCount)
            answer += ( 1 << (n - j - 1)) * sameBitsCount
        }
        return answer
    }
}
```