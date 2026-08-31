# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5388945/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5388945/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n ^ 2 + n + m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} edges
# @return {Integer[][]}
def get_ancestors(n, edges)
    # Create adjacency list
    adjacency_list = Array.new(n) { [] }

    # Fill the adjacency list and indegree array based on the edges
    indegree = Array.new(n, 0)
    edges.each do |edge|
        from = edge[0]
        to = edge[1]
        adjacency_list[from].push(to)
        indegree[to] += 1
    end

    # Queue for nodes with no incoming edges (starting points for topological sort)
    nodes_with_zero_indegree = []
    indegree.each_with_index do |degree, i|
        nodes_with_zero_indegree.push(i) if degree == 0
    end

    # List to store the topological order of nodes
    topological_order = []
    until nodes_with_zero_indegree.empty?
        current_node = nodes_with_zero_indegree.shift
        topological_order.push(current_node)

        # Reduce indegree of neighboring nodes and add them to the queue
        # if they have no more incoming edges
        adjacency_list[current_node].each do |neighbor|
            indegree[neighbor] -= 1
            nodes_with_zero_indegree.push(neighbor) if indegree[neighbor] == 0
        end
    end

    # Initialize the result list and set list for storing ancestors
    ancestors_list = Array.new(n) { [] }
    ancestors_set_list = Array.new(n) { Set.new }

    # Fill the set list with ancestors using the topological order
    topological_order.each do |node|
        adjacency_list[node].each do |neighbor|
            # Add immediate parent, and other ancestors.
            ancestors_set_list[neighbor].add(node)
            ancestors_set_list[neighbor].merge(ancestors_set_list[node])
        end
    end

    # Convert sets to lists and sort them
    ancestors_list.each_with_index do |list, i|
        list.concat(ancestors_set_list[i].to_a)
        list.sort!
    end

    return ancestors_list
end
```