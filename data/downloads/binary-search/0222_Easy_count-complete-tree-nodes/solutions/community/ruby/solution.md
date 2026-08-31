# Ruby | binary search O(log2(n))

**Author:** codingstar1
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/2818905/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/2818905/)

---

# Intuition
Let's implement binary search chasing for the last node in the last level.
<!-- Describe your first thoughts on how to solve this problem. -->
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log2(n))$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```ruby
def count_nodes(root)
    return 0 unless root
    h = 0
    node = root
    h += 1 while node = node.left
    return 1 if h.zero?
    res = 2**h - 1
    h -= 1
    while h > 0
        node = root.left
        h.times { node = node.right }
        if node # It's time for binary search.
            res += 2**h
            root = root.right
        else root = root.left
        end
        h -= 1
    end
    return res += 2 if root.right
    res += 1 if root.left
    res
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_count_nodes < Test::Unit::TestCase
    def test_
        assert_equal 6, count_nodes( tree_parser [1,2,3,4,5,6] )
        assert_equal 0, count_nodes( tree_parser [] )
        assert_equal 1, count_nodes( tree_parser [1] )
    end
end

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def tree_parser(arr)
    return nil unless arr && !arr.empty?
    root = TreeNode.new arr.shift
    queue = [root]
    until arr.empty?
        node = queue.shift
        (val = arr.shift).nil? ? nil : queue << node.left = TreeNode.new(val)
        (val = arr.shift).nil? ? nil : queue << node.right = TreeNode.new(val)
    end
    root
end
```
