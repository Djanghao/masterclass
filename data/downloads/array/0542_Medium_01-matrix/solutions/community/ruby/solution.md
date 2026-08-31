# Ruby Solution BFS

**Author:** piyushsawaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/01-matrix/solutions/1011326/](https://leetcode.com/problems/01-matrix/solutions/1011326/)

---

```
def update_matrix(matrix)
  visited = Set.new
  queue = []
  matrix.size.times do |i|
    matrix[0].size.times do |j|
      if matrix[i][j] == 0
        visited.add([i, j])
        queue.push([i, j])
      end
    end
  end
  
  dir = [[1,0], [0,1], [-1,0], [0,-1]]
  
  while !queue.empty?
    queue.size.times do
      i, j = queue.shift
      dir.each do |x, y|
        dx = i + x
        dy = j + y
        if dx >= 0 && dy >= 0 && dx < matrix.size && dy < matrix[0].size && !visited.include?([dx, dy])
          visited.add([dx, dy])
          queue.push([dx, dy])
          matrix[dx][dy] = matrix[i][j] + 1
        end
      end
    end
  end
  matrix
end
