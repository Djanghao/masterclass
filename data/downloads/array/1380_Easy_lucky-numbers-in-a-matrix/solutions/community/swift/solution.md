# Fast & Simple Solution [Swift] Beats 100%

**Author:** Anastasia1944
**Votes:** 1
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5503301/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5503301/)

---

# Intuition
As the numbers in matrix are distinct, we can find all mins in rows and all maxs in columns and compare them. If the same number is presented in boths lists then this number is lucky.

# Complexity
- Time complexity:
$$O(n*m)$$

- Space complexity:
$$O(n + m)$$

# Code
```
class Solution {
    func luckyNumbers (_ matrix: [[Int]]) -> [Int] {
        let rowMins = matrix.map{ $0.min()! }
        let colMaxs = (0 ..< matrix[0].count).map{ col in matrix.map{ $0[col] }.max()! }
        return rowMins.filter{ colMaxs.contains($0) }
    }
}
```