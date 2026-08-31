# Ruby solution beats 100%.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5038877/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5038877/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {String}
def initialize
    @smallest = nil
end

def pre_order(node, string)
    return if node.nil?

    string = (node.val + 97).chr + string

    if node.left.nil? && node.right.nil?  # Leaf node
        if @smallest.nil? || string < @smallest
            @smallest = string
        end
        return
    end

    pre_order(node.left, string) if node.left
    pre_order(node.right, string) if node.right
end

def smallest_from_leaf(root)
    @smallest = nil
    pre_order(root, "")
    @smallest
end
```