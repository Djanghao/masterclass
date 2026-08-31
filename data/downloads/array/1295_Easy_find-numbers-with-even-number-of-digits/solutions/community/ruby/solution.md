# Ruby one line solution

**Author:** lynnbright
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/749308/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/749308/)

---

```
def find_numbers(nums)
  nums.select { |n| n.digits.count.even? }.count
end
```