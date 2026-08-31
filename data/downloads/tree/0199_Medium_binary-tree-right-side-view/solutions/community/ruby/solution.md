# Ruby 100%

**Author:** Benggi
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/4352928/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/4352928/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
DFS search
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) visit everynodes in tree
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(h) store in @ans which grow up to h
# Code
```
def right_side_view(root)
    @ans = []
    dfs(root)
    @ans
end

def dfs(node, depth = 0)
    return if node.nil?
    @ans[depth] = node.val
    dfs(node.left, depth+1)
    dfs(node.right, depth+1)
end
```