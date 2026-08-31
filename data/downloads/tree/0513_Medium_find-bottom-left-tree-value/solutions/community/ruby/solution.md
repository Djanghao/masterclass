# BFS

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792485/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
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
# @return {Integer}
def find_bottom_left_value(root)
    return root if root.nil?
    return root.val if root.left.nil? and root.right.nil?

    queue = Queue.new 
    queue << root 
    val = root.val 

    while(!queue.empty?) do 
        n_a = []
        queue.size.times do 
            node = queue.pop
            n_a << node.val 

            if node.left
                queue << node.left
            end 

            if node.right 
                queue << node.right
            end 
        end 
        val = n_a.first 
    end 

    val 
end
```