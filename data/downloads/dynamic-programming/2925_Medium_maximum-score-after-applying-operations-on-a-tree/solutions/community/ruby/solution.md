# ruby recursive

**Author:** jose_hj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/5704171/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/5704171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[][]} edges
# @param {Integer[]} values
# @return {Integer}
def maximum_score_after_operations(edges, values)
  @values = values
  @tree = Array.new(@values.size) { [] }
  edges.each do |u, v|
    @tree[u] << v
    @tree[v] << u
  end

  recorrido(0, -1).min
end

def recorrido(node, parent)
  max_val = 0
  sum = 0
      
  @tree[node].each do |i|
    next if i == parent
    
    branch = recorrido(i, node)
    max_val += branch[0]
    sum += branch[1]
  end
  
  max_val += @values[node] if @tree[node] != [parent]
  
  [[max_val, sum].max, sum + @values[node]]
end
```