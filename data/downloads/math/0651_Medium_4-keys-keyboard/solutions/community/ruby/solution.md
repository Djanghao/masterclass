# Ruby solution with memoization (100%/50%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/4197469/](https://leetcode.com/problems/4-keys-keyboard/solutions/4197469/)

---

# Intuition
At each step, we can either take one turn to print whatever's copied or two turns to sleect all and copy.  Use memoization and a few other optimizations to make it more efficient.

# Approach
1. Create a memo to store values efficiently.
2. Call the helper function for n-1 moves (we'll handle the last move separately), 1 character copied (printing this is equivalent to printing 'a'), and no characters printed.

Helper function:
1. If we have negative moves left, return zero.  (We're going to choose the maximum value each time, so we'll never choose this option.)
2. If we have zero moves left, we add copied and printed and return.
3. Return the value stored in memo if there is one.
4. Option 1: paste what's currently copied.
5. Option 2: sleect all text and copy.  (Note that it never makes sense to select all without copying or vice versa, so we only consider the case of doing both in two moves.)
6. Find the higher option, memoize, and return.

# Complexity
- Time complexity:
I think $$O(2^n)$$, but it's optimized a lot.

- Space complexity:
$$O(2^n)$$

# Code
```
def max_a(n)
    @memo = Array.new(n) { {} }
    ways(n-1,1,0)
end

def ways(moves,copied,printed)
    return 0 if moves < 0
    return printed + copied if moves == 0
    return @memo[moves][[copied,printed]] if @memo[moves][[copied,printed]]

    option1 = ways(moves-1,copied,printed+copied)
    option2 = ways(moves-2,printed,printed)

    @memo[moves][[copied,printed]] = [option1,option2].max
end
```