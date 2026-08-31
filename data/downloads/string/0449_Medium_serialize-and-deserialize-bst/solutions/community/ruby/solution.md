# easy ruby - use preorder dfs. If you want to make a string just convert the array to_s and back

**Author:** flame19931
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/5513817/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/5513817/)

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
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# Encodes a tree to a single string.
#
# @param {TreeNode} root
# @return {string}
def serialize(root)
   serialized = []

    _serial(root, serialized)

    serialized
end

def _serial(node, serialized)
    return if node.nil?

    serialized << node.val

    _serial(node.left, serialized)
    _serial(node.right, serialized)
end

# Decodes your encoded data to tree.
#
# @param {string} data
# @return {TreeNode}
def deserialize(data)
    _deserial(data, -1, 10001)
end

# 2, 1, 3
def _deserial(data, lower, upper)
    return nil if data.empty? || data[0] < lower || data[0] > upper

    root = TreeNode.new

    root.val = data.shift
    root.left = _deserial(data, lower, root.val)
    root.right = _deserial(data, root.val, upper)

    root
end


# Your functions will be called as such:
# deserialize(serialize(data))
```