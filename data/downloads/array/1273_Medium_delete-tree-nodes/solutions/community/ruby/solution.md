# Ruby BFS with memoization faster than 100% Ruby

**Author:** AgentK1729
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/2492250/](https://leetcode.com/problems/delete-tree-nodes/solutions/2492250/)

---

```
class Node
    attr_accessor :val, :parent, :children
    def initialize(val)
        @val = val
        @parent = nil
        @children = Set.new
    end
end

def subtree_sum(node)
    if node
        return @memo[node] if @memo.key?(node)
        total = node.val
        count = 1
        node.children.each do |child|
            t, c = subtree_sum(child)
            total += t
            count += c
        end
        @memo[node] = [total, count]
        return [total, count]
    end
end

def prune(root, count)
    q = [root]
    @memo = Hash.new(0)
    while !q.empty?
        node = q.shift
        t, c = subtree_sum(node)
        if t == 0
            count -= c
        else
            q += node.children.to_a.uniq
        end
    end
    
    return count
end

def delete_tree_nodes(nodes, parent, value)
    root = Node.new(value[0])
    nodemem = {0=>root}
    (1..value.length-1).each do |i|
        node = Node.new(value[i])
        nodemem[i] = node
    end
    
    (1..value.length-1).each do |i|
        node = nodemem[i]
        node.parent = nodemem[parent[i]]
        node.parent.children << node
    end
    
    prune(root, nodes)
end
```