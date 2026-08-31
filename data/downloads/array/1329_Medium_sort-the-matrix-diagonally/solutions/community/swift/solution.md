# Swift Solution

**Author:** androgor
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1610342/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1610342/)

---

```
class Solution {
    func diagonalSort(_ mat: [[Int]]) -> [[Int]] {
        // Build diagonals dictionary
        var diagonals: [Int: [Int]] = [:]
        for i in 0..<mat.count {
            for j in 0..<mat[i].count {
                diagonals[i-j, default: []] += [mat[i][j]]
            }
        }
        // Sort each array in the dictionary
        for key in diagonals.keys {
            diagonals[key] = diagonals[key, default: []].sorted()
        }
        // Fill the output matrix with the sorted values
        var output = mat
        for i in 0..<mat.count {
            for j in 0..<mat[i].count {
                output[i][j] = diagonals[i-j]!.removeFirst()
            }
        }
        return output
    }
}
```