# Beats 100% Ruby solution

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/4831071/](https://leetcode.com/problems/two-sum-bsts/solutions/4831071/)

---

# Approach
Get list of values for both the trees. Loop over one list and check if value - target exists in another list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m + n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m + n)

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
# @param {TreeNode} root1
# @param {TreeNode} root2
# @param {Integer} target
# @return {Boolean}
def dfs(curr_node, node_set)
    return if curr_node.nil?

    dfs(curr_node.left, node_set)
    node_set.add(curr_node.val)
    dfs(curr_node.right, node_set)
end

def two_sum_bs_ts(root1, root2, target)
    node_set1 = Set.new
    node_set2 = Set.new
    dfs(root1, node_set1)
    dfs(root2, node_set2)

    node_set1.each do |value1|
        return true if node_set2.include?(target - value1)
    end

    false
end
```