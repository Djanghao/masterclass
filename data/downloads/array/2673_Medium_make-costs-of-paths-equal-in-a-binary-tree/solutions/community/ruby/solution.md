# Ruby O(N)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/4053382/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/4053382/)

---

```ruby
# @param {Integer} n
# @param {Integer[]} cost
# @return {Integer}
def min_increments(n, cost)
  res = 0
  for node in (2...n).step(2).to_a.reverse
    res += (cost[node-1] - cost[node]).abs
    cost[node/2 - 1] += [cost[node-1], cost[node]].max
  end
  res
end
```