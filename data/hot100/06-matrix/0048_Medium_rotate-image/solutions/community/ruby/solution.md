# Ruby Solution

**Author:** dgutt10
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-image/solutions/3040895/](https://leetcode.com/problems/rotate-image/solutions/3040895/)

---



# Code
```
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def rotate(matrix)
  l = 0
  r = matrix.length - 1

  while l < r do 
    t = l
    b = r
    (0..r - l - 1).each do |i|
      # save top left
      top_left = matrix[t][l + i]

      # move bottom left to top left
      matrix[t][l + i] = matrix[b - i][l]

      # move bottom right to bottom left
      matrix[b - i][l] = matrix[b][r - i]

      # move top right to bottom right
      matrix[b][r - i] = matrix[t + i][r]

      # move top left to top right
      matrix[t + i][r] = top_left
    end

    l += 1
    r -= 1
  end

  matrix
end
```