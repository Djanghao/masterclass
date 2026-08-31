# Swift Solution. Beats 100%.

**Author:** GaganD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/4311647/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/4311647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
struct Loc: Hashable {
    let i: Int
    let j: Int
}

class Solution {
    func countPyramids(_ grid: [[Int]]) -> Int {
        var count = 0
        
        for i in 0..<grid.count {
            for j in 0..<grid[0].count {
                guard grid[i][j] == 1 else {
                    continue 
                }

                let location = Loc(i: i, j: j)
                
                var level = 1
                while isPyramindal(location, level: level, in: grid) {
                    level += 1
                    count += 1
                }

                level = 1
                while isInversePyramindal(location, level: level, in: grid) {
                    count += 1
                    level += 1
                }
            }
        }

        return count
    }

    func isPyramindal(_ location: Loc, level: Int, in grid: [[Int]]) -> Bool {
        let rowlevel = location.i+level

        guard rowlevel < grid.count else {
            return false
        }

        let row = grid[rowlevel]

        for newJ in location.j-level...location.j+level {
            if !isValidColumn(j: newJ, in: row) {
                return false
            }
        }

        return true
    }

    private func isValidColumn(j: Int, in row: [Int]) -> Bool {
        j >= 0 && j < row.count && row[j] == 1
    }

    func isInversePyramindal(_ location: Loc, level: Int, in grid: [[Int]]) -> Bool {
        let newRow = location.i-level

        guard newRow >= 0 && newRow < grid.count else {
            return false
        }

        let row = grid[newRow]
        
        for newJ in location.j-level...location.j+level {
            if !isValidColumn(j: newJ, in: row) {
                return false
            }
        }

        return true
    }
}
```