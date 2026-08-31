# String Shifts

**Author:** rwash
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/4254217/](https://leetcode.com/problems/perform-string-shifts/solutions/4254217/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N\u22C5L)
L: length of the string
N: length of the shift array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(L)
<!-- Add your space complexityhere, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @param {Integer[][]} shift
# @return {String}

def string_shift(s, shift)
  shift.each do |(direction, amount)|
    amount %= s.length
    s = direction.zero? ? s[amount..-1] + s[0...amount] : s[-amount..-1] + s[0...-amount]
  end
  s
end

```