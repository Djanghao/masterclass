# [Ruby] DFS, O(n)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132995/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132995/)

---

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
# @param {Integer[]} voyage
# @return {Integer[]}
def flip_match_voyage(root, voyage)
  @voyage = voyage
  @i = 0
  @result = []
  
  dfs(root) ? @result : [-1]
end

def dfs(root)
  return true unless root
  return false if root.val != @voyage[@i]

  @i += 1

  if root.left && root.left.val != @voyage[@i]
    root.left, root.right = root.right, root.left
    @result << root.val
  end

  dfs(root.left) && dfs(root.right)
end
```