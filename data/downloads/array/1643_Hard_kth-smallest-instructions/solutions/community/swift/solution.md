# [SWIFT] Using Combinatorics, beat 100%

**Author:** sashkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/3803332/](https://leetcode.com/problems/kth-smallest-instructions/solutions/3803332/)

---

My only proud in this awful code is that I managed to solve this problem without looking into any hints.

# Code
```
class Solution {
    func kthSmallestPath(_ destination: [Int], _ k: Int) -> String {
        var rows = destination[0] // V
        var columns = destination[1] // H
        var chars: [Character] = []
        var leftK = k
        while leftK >= 1, rows > 0, columns > 0 {
            let (shifts, newK) = shifts(rows, leftK)
            chars.append(contentsOf: Array(repeating: "H", count: columns-shifts))
            chars.append("V")
            rows -= 1
            columns = shifts
            leftK = newK
        }
        chars.append(contentsOf: Array(repeating: "H", count: columns))
        chars.append(contentsOf: Array(repeating: "V", count: rows))
        return String(chars)
    }
    
    private func shifts(_ rows: Int, _ k: Int) -> (Int, Int) {
        if k == 1 { return (0, 0) }
        var shift = 0
        var totalLetters = rows
        var totalCombinations = 1
        var prevTotalCombinations = 1
        while k > totalCombinations {
            prevTotalCombinations = totalCombinations
            if totalLetters == rows {
                totalCombinations = 1
            } else {
                totalCombinations *= totalLetters // had to optimize the code to pass cases with large numbers
                totalCombinations /= (totalLetters-rows)
            }
            shift += 1
            totalLetters += 1
        }
        return (shift-1, k - prevTotalCombinations)
    }
}

```