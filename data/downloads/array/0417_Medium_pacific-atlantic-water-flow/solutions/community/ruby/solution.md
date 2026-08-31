# ruby, dfs or bfs

**Author:** blither
**Votes:** 2
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2292318/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2292318/)

---

Code for each approach is below. Inspiration taken from [this answer](https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/1126938/Short-and-Easy-w-Explanation-and-diagrams-or-Simple-Graph-traversals-DFS-and-BFS).

```
def pacific_atlantic(heights)
    #dfs_method(heights)
    bfs_method(heights)
end

def bfs_method(heights)
    m = heights.size
    n = heights[0].size
    
    @ans = []
    @queue = []
    @atlantic = Array.new(m) { Array.new(n, false) }
    @pacific = Array.new(m) { Array.new(n, false) }
    
    (0...m).each do |i|
        bfs(heights, @pacific, i, 0, m, n)
        bfs(heights, @atlantic, i, n-1, m, n)
    end
    
    (0...n).each do |i|
        bfs(heights, @pacific, 0, i, m, n)
        bfs(heights, @atlantic, m-1, i, m, n)
    end
    
    @ans
end

def bfs(heights, visited, i, j, m, n)
    @queue << [i,j]
    
    while !@queue.empty?
        indices = @queue.pop
        i, j = indices[0], indices[1]
        next if visited[i][j] 

        visited[i][j] = true
    
        @ans << [i,j] if @pacific[i][j] && @atlantic[i][j]

        @queue.push([i+1,j]) if i+1 < m && heights[i+1][j] >= heights[i][j]
        @queue.push([i-1,j]) if i-1 >= 0 && heights[i-1][j] >= heights[i][j]
        @queue.push([i,j+1]) if j+1 < n && heights[i][j+1] >= heights[i][j]
        @queue.push([i,j-1]) if j-1 >= 0 && heights[i][j-1] >= heights[i][j]
    end
end
    
def dfs_method(heights)
    m = heights.size
    n = heights[0].size
    
    @ans = []
    @atlantic = Array.new(m) { Array.new(n, false) }
    @pacific = Array.new(m) { Array.new(n, false) }
    
    (0...m).each do |i|
        dfs(heights, @pacific, i, 0, m, n)
        dfs(heights, @atlantic, i, n-1, m, n)
    end
    
    (0...n).each do |i|
        dfs(heights, @pacific, 0, i, m, n)
        dfs(heights, @atlantic, m-1, i, m, n)
    end
    
    @ans
end

def dfs(heights, visited, i, j, m, n)
    return if visited[i][j] 

    visited[i][j] = true
    
    @ans << [i,j] if @pacific[i][j] && @atlantic[i][j]
    
    dfs(heights, visited, i+1, j, m, n) if i+1 < m && heights[i+1][j] >= heights[i][j]
    dfs(heights, visited, i-1, j, m, n) if i-1 >= 0 && heights[i-1][j] >= heights[i][j]
    dfs(heights, visited, i, j+1, m, n) if j+1 < n && heights[i][j+1] >= heights[i][j]
    dfs(heights, visited, i, j-1, m, n) if j-1 >= 0 && heights[i][j-1] >= heights[i][j]
end
```