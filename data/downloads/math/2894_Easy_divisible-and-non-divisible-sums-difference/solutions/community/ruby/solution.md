# Ruby Solution

**Author:** yalanin
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5980651/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5980651/)

---

```ruby []
# @param {Integer} n
# @param {Integer} m
# @return {Integer}
def difference_of_sums(n, m)
    total = (1 + n) * n / 2
    divisible = n / m
    num2 = m * (1 + divisible) * divisible / 2
    num1 = total - num2
    num1 - num2
end
```