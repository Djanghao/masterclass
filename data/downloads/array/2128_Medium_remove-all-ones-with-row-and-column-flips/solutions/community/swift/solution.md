# super simple swift example with explination

**Author:** cwiedemann
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1763381/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1763381/)

---

If each row is identical then we know there is a way to switch the columns to eliminate the 1s. if rows are either identical or opposite we know we can switch rows to make them identical. Then from there you can switch the columns. 

```
func removeOnes(_ grid: [[Int]]) -> Bool {
        let row1 = grid[0]
        let row1Opposite: [Int] = grid[0].map({ $0 == 0 ? 1 : 0 })
        for row in grid {
            if row == row1 || row == row1Opposite {
                continue
            }
            return false
        }
        return true
    }