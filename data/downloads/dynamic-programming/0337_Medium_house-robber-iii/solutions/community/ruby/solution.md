# Easy Ruby DP

**Author:** superaichao
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/388336/](https://leetcode.com/problems/house-robber-iii/solutions/388336/)

---

Easy Ruby DP
```ruby
# @param {TreeNode} root
# @return {Integer}
def rob(root)
    def dfs(a)
        return [0, 0] if a.nil?
        return [a.val, 0] if a.left.nil? and a.right.nil?

        l = dfs(a.left)
        r = dfs(a.right)

        p1 = a.val + l[1] + r[1]
        p2 = [(l[0] + r[0]), (l[0] + r[1]), (l[1] + r[0]), (l[1] + r[1])].max
        [p1, p2]
    end

    dfs(root).max
end
```