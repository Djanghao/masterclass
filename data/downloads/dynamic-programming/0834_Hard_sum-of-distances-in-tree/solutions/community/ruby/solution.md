# Ruby graph + 2 dfs

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/2937895/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/2937895/)

---

# Code
```
# @param {Integer} n
# @param {Integer[][]} edges
# @return {Integer[]}
def sum_of_distances_in_tree(n, edges)
    @graph = Array.new(n) { [] }
    @count = Array.new(n, 1)
    @answer = Array.new(n,0)

    edges.each do |edge|  
            @graph[edge[0]] << edge[1]
            @graph[edge[1]] << edge[0]
    end
    
        post_order(0, -1)
        pre_order(0, -1)

    @answer
end

def post_order(node, parent)
    @graph[node].each do |child|
        if child != parent
            post_order(child, node)
            @count[node] += @count[child]
            @answer[node] += @answer[child] + @count[child]
        end
    end
end

def pre_order(node, parent)
        @graph[node].each do |child|
        if child != parent
            @answer[child] = @answer[node] + (@count.size - @count[child]) - @count[child]
            pre_order(child, node)
        end
    end
end

```