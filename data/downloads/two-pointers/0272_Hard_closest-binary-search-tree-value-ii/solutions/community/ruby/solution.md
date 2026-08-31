# Ruby 100%

**Author:** Benggi
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4398698/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4398698/)

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
# @param {Float} target
# @param {Integer} k
# @return {Integer[]}
def closest_k_values(root, target, k)
    @heap = MinHeap.new
    queue = [root]
    while queue.any?
        curr = queue.shift
        dis = target-curr.val
        dis = -dis if dis.negative?
        @heap.push(dis, curr.val)
        queue << curr.left if curr.left
        queue << curr.right if curr.right
    end
    res =[]
    k.times {|t| res << @heap.pop}
    res
end
```