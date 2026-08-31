# ✅ Ruby || Simplest 1-liner

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2819960/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2819960/)

---

# Intuition
Binary search

# Approach
Binary search

# Complexity
- Time complexity:
$$O(log(n))$$

- Space complexity:
$$O(1)$$

# Code
```ruby
def guessNumber(n)
    (1..n).bsearch {|v| guess(v) }
end
```