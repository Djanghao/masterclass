# Recursive Ruby Solution

**Author:** woahlag
**Votes:** 7
**Link:** [https://leetcode.com/problems/clone-graph/solutions/599104/](https://leetcode.com/problems/clone-graph/solutions/599104/)

---

```
def cloneGraph(node)
    return nil if node.nil?
    
    @mapping = {}
    deep_clone(node)    
end

def deep_clone(node)
    return @mapping[node.val] if @mapping[node.val]
    
    @mapping[node.val] = Node.new(node.val)
    
    @mapping[node.val].neighbors = node.neighbors.map do |neighbor|
        deep_clone(neighbor)
    end
    
    @mapping[node.val]
end
```