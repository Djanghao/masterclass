# Bipartite Graph

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/4688298/](https://leetcode.com/problems/possible-bipartition/solutions/4688298/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N+E)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N+E)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} dislikes
# @return {Boolean}
def possible_bipartition(n, dislikes)
    @adjacent_list = Hash.new{|h, k| h[k] = [] }
    
    create_adjacent_list(n, dislikes)
    
    @parent = Array.new(n, -1)
    
    @visited = Array.new(n, false)
    
    @level = Array.new(n, -1)
    
    for v in (0...n) do 
        if !@visited[v]
            @visited[v] = true 
            return false if bfs(v)
        end 
    end 
    
    return true 
end

def bfs(node)
    queue = Queue.new
    queue << node
    @level[node] = 0
    
    while(!queue.empty?) do 
        n = queue.pop 
        neighbors = @adjacent_list[n]
        for nei in neighbors do 
            if !@visited[nei]
                @visited[nei] = true 
                @level[nei] = @level[n]+1
                queue <<  nei 
                @parent[nei] = n
            else
                if @parent[n] != nei and @level[nei] == @level[n]
                    return true 
                end 
            end 
        end 
    end 
    return false 
end 

def create_adjacent_list(n, dislikes)
    dislikes.each do |edge0, edge1|
        @adjacent_list[edge0] << edge1
        @adjacent_list[edge1] << edge0
    end 
end
```