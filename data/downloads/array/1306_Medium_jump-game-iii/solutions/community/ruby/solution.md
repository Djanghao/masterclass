# BFS

**Author:** santosh79
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/4785717/](https://leetcode.com/problems/jump-game-iii/solutions/4785717/)

---

# Intuition
Use BFS

# Approach
Treat every index in the array as a node in a graph.

We would like to find out if there is a node in the graph (index in the array) whose value is zero.

A neighbour of a node is an index we can reach from the current index (by doing index (+ or -) value at index)


# Complexity
- Time complexity:
O(n) -- worst case we visit every index in the array

- Space complexity:
O(n) -- the queue we use for BFS worst case will have the same size as the input array.

# Code
```
# @param {Integer[]} arr
# @param {Integer} start
# @return {Boolean}
require 'set'

def can_reach(arr, start)
    bfs_visit(arr, start)
end

def bfs_visit(ar, node)
  visited = Set.new
  qq = []
  qq.push node

  while true
    break if qq.empty?
    cur = qq.shift
    next if visited.member?(cur)
    return true if ar[cur] == 0
    right = (cur + ar[cur])
    left = (cur - ar[cur])
    qq.push(right) if right < ar.size
    qq.push(left) if left >= 0
    visited.add(cur)
  end
  false
end
```