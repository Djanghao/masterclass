# Swift Solution using bit operations O(n^2)

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3623127/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3623127/)

---

# Code
```
class Solution {
    func goodSubsetofBinaryMatrix(_ grid: [[Int]]) -> [Int] {

        var nums: [Int] = []
        nums.reserveCapacity(grid.count)

        for i in grid.indices {
            var num = 0
            for j in grid[i].indices {
                num |= (grid[i][j] << j)
            }

            if num == 0 {
                return [i]
            } else {
                nums.append(num)
            }
        }

        for i in nums.indices.dropLast() {
            for j in i+1..<nums.count where nums[i] & nums[j] == 0 {
                return [i, j]
            }
        }

        return []
    }
}
```