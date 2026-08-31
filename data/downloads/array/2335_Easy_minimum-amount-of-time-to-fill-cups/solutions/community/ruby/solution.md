# Ruby 100% [oneliner]

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5069263/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5069263/)

---

# Code
```
# @param {Integer[]} amount
# @return {Integer}
def fill_cups(amount)
  [amount.max, (amount.sum / 2.0).ceil].max
end
```