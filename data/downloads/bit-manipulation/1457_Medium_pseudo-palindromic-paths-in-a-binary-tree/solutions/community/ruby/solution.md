# Morris Preorder Traversal in Ruby

**Author:** Garrison_J
**Votes:** 1
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4621107/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4621107/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use the Morris Preorder Traversal algorithm to solve this problem in constant space. 

# Approach
<!-- Describe your approach to solving the problem. -->
They hint at this solution in the editorial's `Further Reading` reading section. You can find an explanation of Morris Traversal in the editorial for [Sum Root-to-Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/solution/).

The tricky part I found was figuring out how to calculate the path when backtracking. To do this, we must calculate `pre_path` when looking for our predecessor. 

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
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
def pseudo_palindromic_paths(root)
    count = 0
    path = 0
    while !root.nil? do
        if root.left
            predecessor = root.left
            pre_path = path ^ (1 << predecessor.val)
            while predecessor.right != root && predecessor.right != nil do
                predecessor = predecessor.right
                pre_path ^= (1 << predecessor.val)
            end

            if predecessor.right.nil?      
                path ^= (1 << root.val)          
                predecessor.right = root
                root = root.left
            else
                if predecessor.left.nil? && path & (path-1) == 0
                    count += 1
                end
                
                predecessor.right = nil
                path = pre_path
                root = root.right
            end

        else
            path ^= (1 << root.val)
            if root.right.nil? && path & (path-1) == 0
                count += 1
            end
            root = root.right
        end
    end
    count
end

```