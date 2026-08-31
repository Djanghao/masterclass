# Ruby, DFS (Editorial Approach #1)

**Author:** kahtava
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172647/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172647/)

---

# Code
```
def distribute_coins(root)
  result = 0

  dfs = ->(node) do
    return 0 unless node

    left_val, right_val = dfs.call(node.left), dfs.call(node.right)

    result += left_val.abs + right_val.abs

    (node.val - 1) + left_val + right_val
  end

  dfs.call(root)

  result    
end
```