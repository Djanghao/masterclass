# Dijkstra Algorithm

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277746/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Graph

=begin
    :type n: Integer
    :type edges: Integer[][]
=end
    def initialize(n, edges)
        @adjacent_list = Hash.new{|h, k| h[k] = [] }
        @visited = Array.new(n, false)
        @n = n 
        edges.each do |edge|
            @adjacent_list[edge[0]] << [edge[1], edge[2]]
        end 
    end


=begin
    :type edge: Integer[]
    :rtype: Void
=end
    def add_edge(edge)
        @adjacent_list[edge[0]] << [edge[1], edge[2]]
    end


=begin
    :type node1: Integer
    :type node2: Integer
    :rtype: Integer
=end
    def shortest_path(node1, node2)
       pq = Array.new

       cost_for_node = Array.new(@n, Float::INFINITY)
       cost_for_node[node1] = 0 
       pq = [[0, node1]]

       while(!pq.empty?) do             
            curr_cost, node = pq.pop
            
            return curr_cost if node == node2

            neighbors = @adjacent_list[node]             
           
            for nei, cost in neighbors do 
               new_cost = curr_cost + cost
               
                if new_cost < cost_for_node[nei]
                    cost_for_node[nei] = new_cost
                    index = pq.bsearch_index{|x| x[0] < new_cost} || pq.size
                    pq.insert(index, [new_cost, nei])                    
                end 
            end 
            
       end 
       return -1 
    end


end

# Your Graph object will be instantiated and called as such:
# obj = Graph.new(n, edges)
# obj.add_edge(edge)
# param_2 = obj.shortest_path(node1, node2)
```