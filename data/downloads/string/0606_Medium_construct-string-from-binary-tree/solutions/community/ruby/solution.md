# Simple Solution... very strange question but very easy.

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376606/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376606/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
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
def tree2str(root)
    preorder(root).join
end

def preorder node, array = []
    array << node.val.to_s
    if node.left
        array << "("
        preorder node.left, array
        array << ")"
    end

    if node.right
        if node.left == nil
            array << "()"
        end
        array << "("
        preorder node.right, array
        array << ")"
    end

    array
end
```