# [Ruby] DP

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/1162790/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/1162790/)

---

```
# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Integer}
def num_submatrix_sum_target(matrix, target)
  m, n = matrix.count, matrix[0].count
  m.times{|x| (n-1).times{|y| matrix[x][y+1] += matrix[x][y]}}

  result = 0
  
  n.times do |y1|
    (y1...n).each do |y2|
      h = {0 => 1}
      s = 0

      m.times do |x|
        s += matrix[x][y2] - (y1 > 0 ? matrix[x][y1-1] : 0)
        result += h[s - target] || 0
        h[s] = (h[s] || 0) + 1
      end
    end
  end
  
  result
end
```