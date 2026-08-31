# Ruby solution by generating repeating decimal (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/3585892/](https://leetcode.com/problems/equal-rational-numbers/solutions/3585892/)

---

# Intuition
Convert each number into a string (with many repetitions) then compare the size of the numbers.

# Approach
1. Split each number into the nonrepeating part and the repeating part.
2. If a number has a repeating part, add that to the number 20 times.  (Note that the repeating part has a ')' at the end, which we don't want to include.)
3. Convert both numbers to floats and compare.  If the difference is very small, they must be equal.

# Complexity
- Time complexity:
$$O(1)$$, given the small limits on input size.

- Space complexity:
$$O(1)$$

# Code
```
def is_rational_equal(s, t)
    s = s.split('(')
    t = t.split('(')

    s = s.length == 1 ? s[0] : s[0] + s[1][0...-1] * 20
    t = t.length == 1 ? t[0] : t[0] + t[1][0...-1] * 20

    (s.to_f - t.to_f).abs < 10**-10
end
```