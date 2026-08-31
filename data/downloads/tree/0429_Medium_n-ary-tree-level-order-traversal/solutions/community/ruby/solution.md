# Ruby solution using Ruby idioms

**Author:** sahilshah_rr
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/673557/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/673557/)

---

This performs a typical BFS traversal using a queue. The outer loop executes once per level. Hence, the queue can be replaced entirely at the end of each iteration of outer loop.

The code may be practically optimized further by combining the two inner loops: the one that _visits_ each node, and the one that populates the next queue.

```ruby
# Definition for a Node.
# class Node
#     attr_accessor :val, :children
#     def initialize(val)
#         @val = val
#         @children = []
#     end
# end

# @param [Node] root
# @return [Array<Array<Integer>>]
def levelOrder(root)
  [].tap do |arr|
    queue = Array(root)
    until queue.empty?
      arr << queue.map(&:val)
      queue = queue.flat_map(&:children)
    end
  end
end
```

**Time Complexity**: `O(n)` where `n` is the total number of nodes.
**Space Complexity**: `O(n)`