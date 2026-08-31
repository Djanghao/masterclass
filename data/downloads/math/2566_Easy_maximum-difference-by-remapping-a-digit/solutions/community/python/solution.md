# Python short and clean.

**Author:** darshan-as
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3205157/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3205157/)

---

# Approach
We are allowed to replace one of the 10 possible digits to other.

1. Min number can be formed by replacing the `first digit`, and all other occurences of it, with `0`.

2. Max number can be formed by replacing the `first non 9 digit`, and all other occurences of it with `9`.

3. Return the difference between max and min possible numbers.

# Complexity
- Time complexity: $$O(k)$$

- Space complexity: $$O(k)$$

where, `k is number of digits in num`.

# Code
```python
class Solution:
    def minMaxDifference(self, num: int) -> int:
        s_num = str(num)

        ch = s_num[0]
        min_num = int(s_num.replace(ch, '0'))

        ch = next((x for x in s_num if x != '9'), '0')
        max_num = int(s_num.replace(ch, '9'))

        return max_num - min_num


```