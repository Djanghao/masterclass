# DFS. 196 ms.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/4280212/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/4280212/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(v+e)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(v)
# Code
```
# @param {Integer} n
# @param {Integer[][]} paths
# @return {Integer[]}
def garden_no_adj(n, paths)
    # Every garden has at most 3 paths coming into or leaving it

    # paths is an adjancy list where xi goes to yi and vice versa. 

    # Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

    # The flower types are denoted 1, 2, 3, or 4, only 4 flower types.

    # Step 1 build an adjancy list.
    # Step 2 go through the list via topological sort, when encountering a path without a plant type, add one and then add plant twos to all adjacent paths. Use recursion to narrow down possibily choices for flower types.

    adj_list = Array.new(n+1) {[]}
    paths.each do |a,b|
        adj_list[a] << b
        adj_list[b] << a
    end

    ts = TopologicalSort.new(adj_list)
    ts.answer
end

class TopologicalSort
    attr_accessor :answer, :debug

    def initialize(adj_list)
        @adj_list = adj_list
        @answer = Array.new(adj_list.size)
        
        @visited = {}

        i = 1
        while i < adj_list.size
            dfs(i)
            i += 1
        end
        
        # removes blank in front of array due to being 0 index. 
        @answer.shift
    end

    def dfs vertex
        if @visited[vertex]
            return false
        else 
            @visited[vertex] = true
        end

        # 5 to account for 0 index, and 4 flower types.
        used_plant_types = Array.new(5)

        @adj_list[vertex].each do |v|
            if @answer[v]
                used_plant_types[@answer[v]] = true
            end
        end
        
        i = 1
        while @answer[vertex] == nil and i < 5
            if used_plant_types[i] == nil
                @answer[vertex] = i
                used_plant_types[i] = vertex
                break
            end
            i+= 1
        end

        @adj_list[vertex].each do |v|
            dfs v
        end
    end
end



```