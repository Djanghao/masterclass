# Ruby: Number of trees in a range.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/1568504/](https://leetcode.com/problems/unique-binary-search-trees/solutions/1568504/)

---

## Leetcode: 96. Unique Binary Search Trees.


**Ruby: Number of trees in a range.**


Need to create DP algorithm where the subproblem is number of trees in a range. The key idea that tree can be represtented as left range, root node, right range. And one more there alway only one nil. So the formula of number of possible trees for a root node is `dp(left_range)*dp(right_range)`. Thats all.

Ruby code:
```Ruby
# Leetcode: 96. Unique Binary Search Trees.
# https://leetcode.com/problems/unique-binary-search-trees/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# Runtime: 52 ms, faster than 96.30% of Ruby online submissions for Unique Binary Search Trees.
# Memory Usage: 209.7 MB, less than 92.59% of Ruby online submissions for Unique Binary Search Trees.
# @param {Integer} n
# @return {Integer}
def num_trees(n)
  @dp = Array.new(20).map{ Array.new(20)}
  track(1,n)
end

def track(i,j)
  return 1 if i > j
  return @dp[i][j] if @dp[i][j]
  total = 0
  (i..j).each do |k|
    total += track(i,k-1) *  track(k+1,j) 
  end
  @dp[i][j] = total 
end
```
