# DFS

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5528408/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5528408/)

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
# @param {TreeNode} root
# @return {Integer}
def sum_even_grandparent(root)
    @sum = 0
    dfs root
    @sum
end

def dfs node, parent = nil
    if parent and parent.val.even?
        local_sum = 0
        if node.right 
            local_sum += node.right.val 
        end

        if node.left 
            local_sum += node.left.val 
        end

        @sum += local_sum
    end

    if node.right
        dfs node.right, node
    end

    if node.left
        dfs node.left, node
    end
    
end
```