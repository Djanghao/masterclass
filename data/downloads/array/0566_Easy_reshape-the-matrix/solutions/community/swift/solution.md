# Swift solution

**Author:** aaditbagdi
**Votes:** 1
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/5972267/](https://leetcode.com/problems/reshape-the-matrix/solutions/5972267/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(M * N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(1)$$

# Code
```swift []
class Solution {
    func matrixReshape(_ mat: [[Int]], _ r: Int, _ c: Int) -> [[Int]] {
        if r * c != mat.count * mat[0].count {
            return mat
        }
        var sol = Array(repeating: Array(repeating: 0, count: c), count: r)
        var flattened = mat.flatMap { $0 }
        var k = 0
        for i in 0..<r {
            for j in 0..<c {
                sol[i][j] = flattened[k]
                k += 1
            }
        }
        return sol

    }
}
```