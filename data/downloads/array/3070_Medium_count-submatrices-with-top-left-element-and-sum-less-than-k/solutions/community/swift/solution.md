# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4837632/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4837632/)

---

```
class Solution {
    func countSubmatrices(_ grid: [[Int]], _ k: Int) -> Int {
        
        var sums = grid
        var res = 0

        for i in sums.indices {
            for j in sums[i].indices {

                if i == 0, j > 0 {
                    sums[i][j] += sums[i][j - 1]
                }
                else if i > 0, j == 0 {
                    sums[i][j] += sums[i - 1][j]
                }
                else if i > 0, j > 0 {
                    sums[i][j] += sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1]
                }

                if sums[i][j] <= k {
                    res += 1
                }
            }
        }

        return res
    }
}
```