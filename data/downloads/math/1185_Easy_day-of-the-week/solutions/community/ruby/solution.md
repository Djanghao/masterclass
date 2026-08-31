# using Date library

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/5231575/](https://leetcode.com/problems/day-of-the-week/solutions/5231575/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} day
# @param {Integer} month
# @param {Integer} year
# @return {String}
require 'date'
def day_of_the_week(day, month, year)
    Date.parse("#{day}/#{month}/#{year}").strftime('%A')
end
```