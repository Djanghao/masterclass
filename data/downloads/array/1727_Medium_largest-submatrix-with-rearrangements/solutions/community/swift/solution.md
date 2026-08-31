# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4330254/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4330254/)

---

# Complexity
- Time complexity: $$O(mn.log.n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func largestSubmatrix(_ matrix: [[Int]]) -> Int {
        var ans = 0
        var hist = Array(repeating: 0, count: matrix[0].count)
        
        for row in matrix {
            for i in 0..<row.count {
                hist[i] = row[i] == 0 ? 0 : hist[i] + 1
            }
            
            let sortedHist = hist.sorted()
            
            for i in 0..<sortedHist.count {
                let h = sortedHist[i]
                ans = max(ans, h * (row.count - i))
            }
        }
        
        return ans
    }
}
```