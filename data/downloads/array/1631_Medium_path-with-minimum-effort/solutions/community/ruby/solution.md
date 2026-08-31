# Binary Search and Graph BFS 100% Time/Space

**Author:** emmamm05
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/4050741/](https://leetcode.com/problems/path-with-minimum-effort/solutions/4050741/)

---

# Approach\r
<!-- Describe your approach to solving the problem. -->\r
*Implementation of editorial solution: Binary Search and Graph BFS*\r
\r
# Complexity\r
- Time complexity: $$O(M * N)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
- Space complexity: $$O(M * N)$$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
# @param {Integer[][]} heights\r
# @return {Integer}\r
def minimum_effort_path(heights)\r
  (0...10**6).bsearch{ |mid| find_paths(heights, mid) } || 0\r
end\r
\r
def find_paths(heights, mid)\r
   visited = Array.new(heights.size){ Array.new(heights[0].size){ false } }\r
   queue = [[0, 0]]\r
   loop do\r
     return false if queue.empty?\r
\r
     x, y = queue.pop\r
     neighbors(x, y, heights).each do |x1, y1|\r
       next if visited[x1][y1]\r
       next if (heights[x1][y1] - heights[x][y]).abs > mid\r
       return true if x1 == heights.size - 1 && y1 == heights[0].size - 1\r
\r
       visited[x1][y1] = true\r
       queue.push([x1, y1])\r
     end\r
   end\r
end\r
\r
def neighbors(x, y, heights)\r
    arr = []\r
    arr << [x + 1, y] if x < heights.size - 1\r
    arr << [x, y + 1] if y < heights[0].size - 1\r
    arr << [x - 1, y] if x > 0\r
    arr << [x, y - 1] if y > 0\r
    arr\r
end\r
```