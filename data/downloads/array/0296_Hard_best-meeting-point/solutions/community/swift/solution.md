# [Swift] Simple Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/498841/](https://leetcode.com/problems/best-meeting-point/solutions/498841/)

---

```
class Solution {
    func minTotalDistance(_ grid: [[Int]]) -> Int {
        let m = grid.count
        let n = grid[0].count
        var rows:[Int] = []
        var cols:[Int] = []

        for i in 0..<m{
            for j in 0..<n{
                if grid[i][j] == 1{
                    rows.append(i)
                    cols.append(j)
                }
            }
        }
        let row = rows[rows.count / 2];
        cols.sort()
        let col = cols[cols.count / 2];
        var distance = 0
        for k in 0..<rows.count{
            distance += abs(cols[k]-col) + abs(rows[k]-row);
        }
        return distance
    }
}

```