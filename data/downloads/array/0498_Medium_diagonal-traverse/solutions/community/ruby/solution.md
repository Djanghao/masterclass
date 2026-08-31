# [Ruby] BFS

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/986848/](https://leetcode.com/problems/diagonal-traverse/solutions/986848/)

---

```
# @param {Integer[][]} matrix
# @return {Integer[]}
def find_diagonal_order(matrix)
  return [] if matrix.empty?
  m, n = matrix.count, matrix[0].count

  diagonal = [[0, 0]]
  result_coordinates = diagonal.dup
  
  (m + n - 2).times do |i|
    next_diagonal = []
    
    diagonal.each_with_index do |coordinates, j|
      x, y = coordinates
      next_diagonal << [x+1, y] if j == 0 && x < m-1
      next_diagonal << [x, y+1] if y < n-1
    end
    
    diagonal = next_diagonal
    result_coordinates += i.odd? ? diagonal : diagonal.reverse
  end

  result_coordinates.map{|x, y| matrix[x][y]}
end
```