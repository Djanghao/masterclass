# Ruby solution with memoization and explanation (100%/100%)

**Author:** dtkalla
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3512855/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3512855/)

---

# Intuition
Use memoization to find the possibilities for each length, then sum the lengths from low to high.

# Approach
1. Create class variables for helper function
2. Find the sum of the number of good strings for each length low to high using a helper function
    Helper function:
    a. Handle base cases
    b. Return memoized value if it exists
    c. Find the number of possibilities for the two shorter strings, by removing one "1"s or zero "0"s.  (Note that this still works if one and zero are the same -- the strings are distinct even if the ending is the same.)
    d. Add these together, do mod 10**9+7, memoize, and return.  (We want to use modulo here to prevent each value from growing too much.)
3. Return the sum mod 10**9+7

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def count_good_strings(low, high, zero, one)
    @memo = {}
    @zero, @one = zero, one
    @mod = 1000000007

    total = 0
    (low..high).each { |i| total += good_strings(i) }
    total % @mod
end

def good_strings(i)
    return 0 if i < 0
    return 1 if i == 0
    return @memo[i] if @memo[i]

    @memo[i] = (good_strings(i - @zero) + good_strings(i - @one)) % @mod
end
```