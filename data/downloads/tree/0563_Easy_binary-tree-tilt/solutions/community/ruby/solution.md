# Solution without instance variables

**Author:** babinslava
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/929113/](https://leetcode.com/problems/binary-tree-tilt/solutions/929113/)

---


```
# @param {TreeNode} root
# @return {Integer}
def find_tilt(root)
  _, sum = dfs(root, 0)
  sum
end

# takes sum of tilts
# returns weigth, sum of tilts
def dfs(root, sum)
  return 0, sum if root.nil?

  left, sum = dfs(root.left, sum)
  right, sum = dfs(root.right, sum)
  sum += (left - right).abs

  [root.val + left + right, sum]
end

```