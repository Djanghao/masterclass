# Simple Swift solution

**Author:** oldinzaghi
**Votes:** 1
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4330904/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4330904/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func areSimilar(_ mat: [[Int]], _ k: Int) -> Bool {
        if mat.isEmpty { return false }
        let m = mat.count, n = mat[0].count
        for i in 0..<m {
            for j in 0..<n {
                if mat[i][j] != mat[i][(j+k) % n] { return false}
            }
        }
        return true
    }
}
```