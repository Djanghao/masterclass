# Quick, efficient Ruby solution

**Author:** malexander
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/5415695/](https://leetcode.com/problems/graph-valid-tree/solutions/5415695/)

---


# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
require 'set'

# @param {Integer} n
# @param {Integer[][]} edges
# @return {Boolean}
def valid_tree(n, edges)
  adj_list = Hash.new { |hash, key| hash[key] = [] }
  visit = Set.new
  queue = []

  # Create the adjacency list
  edges.each do |edge|
    adj_list[edge[0]] << edge[1]
    adj_list[edge[1]] << edge[0]
  end

  # Initialize the queue with the first node
  queue.push(0)
  
  until queue.empty?
    node = queue.shift
    return false if visit.include?(node)

    visit.add(node)
    
    adj_list[node].each do |adjacent_node|
      queue.push(adjacent_node) unless visit.include?(adjacent_node)
    end
  end

  # Check if all nodes are visited
  visit.size == n
end

```