# Toplogical Sort, beats 100%

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/4277666/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/4277666/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. Convert restricted list to hash
2. Build adj list from edges while ignoring all pairs that have a vertex within the restricted list.
3. Recursive through all vertices adjacent to 0.
4. Return visited size. 


# Code
```
# @param {Integer} n
# @param {Integer[][]} edges
# @param {Integer[]} restricted
# @return {Integer}
def reachable_nodes(n, edges, restricted)
    restricted_hash = {}
    restricted.each do |node|
        restricted_hash[node] = true
    end

    adj_list = Array.new(n) { [] }
    edges.each do |a,b|
        if restricted_hash[a] || restricted_hash[b]
            next
        end

        adj_list[a] << b
        adj_list[b] << a
    end

    ts = ToplogicalSort.new(adj_list)
    ts.visited.size
end

class ToplogicalSort
    attr_accessor :visited
    def initialize(adj_list)
        @adj_list = adj_list
        @visited = {}
        dfs 0
    end


    def dfs vertex
        if @visited[vertex]
            return
        else
            @visited[vertex] = true
        end

        @adj_list[vertex].each do |v|
            dfs v
        end
    end

end
```