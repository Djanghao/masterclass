# Ruby: prefix sum and recursion

**Author:** lacrosse
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3419393/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3419393/)

---

# Code
```ruby
class Array
  def scan(st) = map { st = yield st, _1 }
  def prefsum = scan(0, &:+).unshift(0)
end

def max_value_of_coins(piles, k)
  @pile_prefs = piles.map(&:prefsum)
  @size_prefs = piles.map(&:size).prefsum
  @_dp = Array.new(piles.size) { [] } << -> _ { 0 }
  dp(0, k)
end

def dp(i, k)
  @_dp[i][k] ||= begin
    pref = @pile_prefs[i]
    rem = @size_prefs[-1] - @size_prefs[i + 1]
    (max(0, k - rem)..min(k, pref.size - 1)).map { pref[_1] + dp(i + 1, k - _1) }.max
  end
end

def min(a, b) = a < b ? a : b
def max(a, b) = a > b ? a : b
```

# Time complexity

$$\\mathcal{O}(\\sum|\	ext{piles}_i|)$$

# Space complexity

$$\\mathcal{O}(\\sum|\	ext{piles}_i|)$$