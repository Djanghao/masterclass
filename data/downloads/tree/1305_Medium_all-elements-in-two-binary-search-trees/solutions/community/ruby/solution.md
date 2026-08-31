# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5528559/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5528559/)

---


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
# @return {Integer[]}
def get_all_elements(root1, root2)
    @vals = []
    if root1
        dfs root1
    end
    if root2
        dfs root2
    end
    @vals.sort!
end

def dfs node
    if node.left
        dfs node.left
    end

    @vals << node.val

    if node.right
        dfs node.right
    end
end
```