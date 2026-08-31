# Straightforward and efficient Swift solution

**Author:** melihov
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/4079836/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/4079836/)

---

# Approach
For each cell, collect two sets of unique values - topLeft and bottomRight. Sets' count difference is the resullting value for the given cell. Repeat within a nested cycle.

# Code
```
class Solution {
	func differenceOfDistinctValues(_ grid: [[Int]]) -> [[Int]] {
		var res = [[Int]]()

		for i in 0..<grid.count {
			res.append([])

			for j in 0..<grid[i].count {
				var k = i, l = j
				var topLeftNums = Set<Int>(), bottomRightNums = Set<Int>()

                // Collect unique top-left values

				while k > 0 && l > 0 {
					k -= 1; l -= 1; topLeftNums.insert(grid[k][l])
                }

				k = i; l = j

                // Collect unique bottom-right values

				while k < (grid.count - 1) && l < (grid[k + 1].count - 1) {
					k += 1; l += 1; bottomRightNums.insert(grid[k][l])
				}

				res[i].append(abs(topLeftNums.count - bottomRightNums.count))
			}
		}

		return res
	}
}
```