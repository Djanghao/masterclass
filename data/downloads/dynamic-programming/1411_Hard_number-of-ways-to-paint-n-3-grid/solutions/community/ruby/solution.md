# Short Ruby solution with memoization and explanation (100%/33%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/3615450/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/3615450/)

---

# Intuition
There are only two patterns: two colors (RYR) or three colors (RGY).  Count how many there are and how many you can build off each one on the next row.

# Approach
1. If there's only one row, there are six patterns made up of two distinct colors and 6 made up of three different colors.  That's our base case, so create a memo with that case.
2. Store mod as a class variable as well.

3. We want a function that returns the number of rows ending in each type (two colors or three colors), so create a helper function.  For the main function, call the helper function with n, add the two ways, and mod.

4. If we've stored the relevant value, return that value.  (Note that this is a *class* memo, so we could have stored in a previous call of the main function.)
5. Find the number of two-color and three-color possiblities from the previous row.
6. Calculate how many tow-color and three-color possibilities there are for the last row, mod for memory (otherwise the numbers get too big), memoize, and return.

If the last row had two colors, there are 3 two-color possibilities and 2 three-color possibilities for the next row.  Without loss of gneerality, the previous row is RYR.
Two-colors: GRG, YRY, YGY
Three-colors: YGR, RGY

If the last row was three colors, there are tow possibilities of each type.  If the previous row was RGY:
Two-colors: GRG, GYG
Three-colors: YRG, GYR

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$, but we keep occupying the memory between function calls.  (This makes it faster to do lots of calls.)

# Code
```
@memo = {1 => [6,6]}
@mod = 1000000007

def num_of_ways(n)
    num_ways(n).sum % @mod
end

def num_ways(n)
    return @memo[n] if @memo[n]

    a,b = num_ways(n-1)
    
    @memo[n] = [(3*a + 2*b) % @mod, (2*a + 2*b) % @mod]
end
```