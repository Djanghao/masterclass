# [Ruby] Simple oneliner solution

**Author:** ArtemTrepalin_
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/3218141/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/3218141/)

---


# Code
```
# @param {Integer} low
# @param {Integer} high
# @return {Integer}
def count_odds(low, high)
  low.even? && high.even? ? (high - low) / 2 : (high - low) / 2 + 1
end
```