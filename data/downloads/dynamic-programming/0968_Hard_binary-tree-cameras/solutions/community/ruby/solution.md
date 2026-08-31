# Beats 100% Runtime | Ruby solution using Backtracking

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/4306589/](https://leetcode.com/problems/binary-tree-cameras/solutions/4306589/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) -> n = number of nodes in the tree

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(H) -> H = height of the tree

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
# @return {Integer}
def min_camera_cover(root)
    @result = 0
    @covered = Set.new
    @covered << nil
    dfs(root, nil)
    @result
end

def dfs(node, parent)
    return if node.nil?

    dfs(node.left, node)
    dfs(node.right, node)

    if parent.nil? && !@covered.include?(node) || !@covered.include?(node.left) || !@covered.include?(node.right)
        @result += 1
        @covered << parent
        @covered << node
        @covered << node.left
        @covered << node.right
    end

end
```