# BFS

**Author:** mahi3432
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786790/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786790/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
BFS

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[][]} grid
# @param {Integer} health
# @return {Boolean}
def find_safe_walk(grid, health)
  @m, @n = grid.length, grid.first.length
  q = Queue.new
  visited = { }
  dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  if grid[0][0] == 0
    start_health = health
  else
    start_health = health - 1
  end

  q << [[0, 0], start_health]
  visited[[0, 0]] = start_health

  while !q.empty? do
    node, h = *q.pop
    # puts "node: #{node.to_s} h: #{h}"
    return true if node == [@m-1, @n-1] && h > 0

    # next if visited.include?([node.first, node.last, h]) || h < 1
    # visited << [node.first, node.last, h]

    dirs.each do |dir|
      next_node = [node.first + dir.first, node.last + dir.last]
      if !out_of_bound?(next_node) 
        prev_visit = visited[next_node]

        if grid[next_node.first][next_node.last] == 0
           if (!prev_visit || prev_visit < h) && h > 0
             q << [next_node, h]
             visited[next_node] = h
           end
        else
          if h - 1 > 0 && (!prev_visit || prev_visit < h - 1)
            q << [next_node, h - 1]
            visited[next_node] = h - 1
          end
        end
      end
    end
  end  

  false
end

def out_of_bound?(node)
  node.first < 0 || node.last < 0 || node.first >= @m || node.last >= @n
end
```