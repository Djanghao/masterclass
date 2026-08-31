# valid_bst

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/3635414/](https://leetcode.com/problems/largest-bst-subtree/solutions/3635414/)

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
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer}
def largest_bst_subtree(root)
    return 0 if root.nil?
    @max = 0

    dfs(root)


    @max  
end

def dfs(root)
    value = check_if_bst(root)

    result = nil     

    #p value 

    if value[0] == true 
        @max =  [@max,value[1]].max 
        #p @max 
    end 
    
    if root.left
        dfs(root.left)
    end 

    if root.right
        dfs(root.right)
    end 

end 

def check_if_bst(node)
    res = []
    inorder_traversal(node, res)
    #p res 
    return [true, res.size] if (res.uniq.length == res.length and res == res.sort)

    return [false, nil]
end 

def  inorder_traversal(node, res)
    if node.left
        inorder_traversal(node.left, res)
    end 

    res << node.val

    if node.right
        inorder_traversal(node.right, res)
    end 
end 
```