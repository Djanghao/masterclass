# Ruby one-liner

**Author:** risko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1894985/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1894985/)

---

```
# @param {Integer[]} prices
# @return {Integer}
def get_descent_periods(prices)
    prices.slice_when{|a,b| a-1 != b }.sum{|x| n = x.size(); n*(n+1)/2}
end
```