# ✅ Explained ✅ Easy 3-loops solution

**Author:** cristianosalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4398249/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4398249/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
(1) Every result in matrix multiplication is given by the sum of multiplication of all numbers in the first matrix row with the second matrix column (k). So we multiply this items (k) times and then sum all elements in the multiply array.

(2) We repeat this step for every row in the second matrix (n) and add in the row array. 

(3) We repeat those 2 steps for every column in the first matrix (m) and add the row array to the final answer.

<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity: $$O(m * n * k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m * n * k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func multiply(_ mat1: [[Int]], _ mat2: [[Int]]) -> [[Int]] {
        var result = [[Int]]()
        
        let m = mat1.count // col1
        let n = mat2[0].count // row2
        let k = mat1[0].count // row1 col2
        
        for j in 0..<m {
            var row = [Int]()
            for l in 0..<n {    
                var multiply = Array(repeating: 0, count: k)
                for i in 0..<k {
                    multiply[i] = mat1[j][i] * mat2[i][l]
                }
                row.append(multiply.reduce(0,+))
            }
            result.append(row)
        }
        
        return result       
    }
}
```