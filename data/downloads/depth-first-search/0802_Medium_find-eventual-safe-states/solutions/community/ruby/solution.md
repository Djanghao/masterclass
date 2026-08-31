# Topological Sort

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/4277384/](https://leetcode.com/problems/find-eventual-safe-states/solutions/4277384/)

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
# @param {Integer[][]} graph
# @return {Integer[]}
def eventual_safe_nodes(graph)
    ts = TopologicalSort.new(graph)
    ts.answer
end

class TopologicalSort
    attr_accessor :answer

    def initialize(adj_list)
        @answer = []
        @safe_list = Set.new
        @unsafe_list = Set.new
        @adj_list = adj_list
        adj_list.each_with_index do |adj, i|
            if @safe_list.include? i
                @answer << i
            elsif @unsafe_list.include? i

            else
                if (dfs i) != false
                    @answer << i
                end 
            end
        end
    end

    def dfs vertex, visited = {}
        if visited[vertex]
            return false
        else
            visited[vertex] = true
        end

        @adj_list[vertex].each do |v|
            if @safe_list.include? v

            elsif @unsafe_list.include? v
                return false
            else
                if (dfs v, visited.clone) == false
                    @unsafe_list << v
                    return false
                end
            end
        end
        @safe_list << vertex
        return true
    end
end
```