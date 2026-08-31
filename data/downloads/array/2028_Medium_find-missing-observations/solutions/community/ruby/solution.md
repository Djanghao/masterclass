# Ruby | 4 Liner

**Author:** sparlaimor
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5739040/](https://leetcode.com/problems/find-missing-observations/solutions/5739040/)

---

# Code
```ruby []
# @param {Integer[]} rolls
# @param {Integer} mean
# @param {Integer} n
# @return {Integer[]}
def missing_rolls(rolls, mean, n)
  sum = mean * (n + rolls.size) - rolls.sum
  return [] unless sum.between?(n, 6 * n)

  number, ones = sum.divmod(n)
  Array.new(n) { |i| i < ones ? number + 1 : number }
end
```