# ruby

**Author:** jose_hj
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-block-sum/solutions/5954559/](https://leetcode.com/problems/matrix-block-sum/solutions/5954559/)

---

# Code
```ruby []
# @param {Integer[][]} mat
# @param {Integer} k
# @return {Integer[][]}
def matrix_block_sum(mat, k)
  var_x = mat.size - 1
  var_y = mat[0].size - 1
  answer = Array.new(mat.size){ [0]*mat[0].size }
  (0..var_x).each do |i|
    (0..var_y).each do |j|
      min_x = [0, i-k].max
      max_x = [var_x, i+k].min
      min_y = [0, j-k].max
      max_y = [var_y, j+k].min
      (min_x..max_x).each do |x|
        answer[i][j] += mat[x][min_y..max_y].sum
      end
    end
  end
  answer
end
```