# 🍏easy Swift solution | O(n)

**Author:** nastyabeggin
**Votes:** 0
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/3980667/](https://leetcode.com/problems/cinema-seat-allocation/solutions/3980667/)

---

# Solution
On one row maximum two groups of four can be located on seats 2-5 and 6-9. We will use hashMap to store arrray of three integers indicating place availability for each row. 

*Note: [2-5, 4-7, 6-9] 1 if place at this number of seats is taken*

On each iteration through `reservedSeats` will add unavailable places to hashMap and (if all the places for groups of 4 are taken) add to excluded array. Also will remove excluded from hashMap

The result will be `(n - excluded.count - rowsTaken.count) * 2 + rowsTaken.count * 1`

# Complexity
- Time complexity:
 $$O(n)$$

# Code
```
class Solution {
    func maxNumberOfFamilies(_ n: Int, _ reservedSeats: [[Int]]) -> Int {
        // 2-5 4-7 6-9
        var rowsTaken = [Int: [Int]]()
        var excluded = [Int]()

        for arr in reservedSeats {

            let row = arr[0] - 1
            let seat = arr[1]

            guard seat != 1 && seat != 10 && !excluded.contains(row) else { continue }

            if rowsTaken[row] == nil {
                rowsTaken[row] = [0, 0, 0]
            }
            if seat >= 2 && seat <= 5 {
                rowsTaken[row]![0] = 1
            }
            if seat >= 4 && seat <= 7 {
                rowsTaken[row]![1] = 1
            }
            if seat >= 6 && seat <= 9 {
                rowsTaken[row]![2] = 1
            }
            if rowsTaken[row] == [1, 1, 1] {
                excluded.append(row)
                rowsTaken[row] = nil
            }
        }
        return ((n - excluded.count - rowsTaken.count) * 2 + rowsTaken.count * 1)
    }
}
```