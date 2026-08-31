# Ruby DFS solution

**Author:** koujiokada
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433178/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433178/)

---

# Code
```
def dfs(root, left, count)
  return unless root
  @max = [@max, count].max
  dfs(root.left, false, left ? count+1 : 1)
  dfs(root.right, true, !left ? count+1 : 1)
end

def longest_zig_zag(root)
  @max = 0
  dfs(root, true, 0)
  dfs(root, false, 0)
  @max
end
```