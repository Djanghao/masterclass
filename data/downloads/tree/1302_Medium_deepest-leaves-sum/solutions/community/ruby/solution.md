# Ruby classic BFS with Queue

**Author:** SlazZy
**Votes:** 1
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/3197517/](https://leetcode.com/problems/deepest-leaves-sum/solutions/3197517/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

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
def deepest_leaves_sum(root)
    q = Queue.new
    q << root

    while q.size > 0
        result = 0
        q.size.times do
            node = q.pop

            result += node.val

            q << node.left if node.left
            q << node.right if node.right
        end
    end
    
    result
end
```