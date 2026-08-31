# Sliding window optimized solution || Beats 100% || Dynamic Programming || Step-by-step breakdown

**Author:** Ignisko
**Votes:** 0
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/5952146/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/5952146/)

---

inspired by @Chris1337

# Intuition
The problem requires us to find how many ways we can tile a 2x`n` board using 2x1 dominoes and L-shaped trominoes. Initially, it seems like a straightforward dynamic programming problem, where the number of ways to tile a 2x`n` board depends on the number of ways to tile smaller boards.

Upon examining small cases, we observe a pattern where the number of ways to tile the board is related to the number of ways to tile smaller boards. The challenge is to account for both dominoes and trominoes, especially for configurations that use trominoes spanning three columns.

# Approach
We can use dynamic programming to solve this problem efficiently by keeping track of the number of ways to tile smaller boards and using that information to compute the solution for larger boards.

### Steps:
1. **Base cases**:
   - For `n = 0`, there's exactly 1 way to tile the board (an empty board).
   - For `n = 1`, there's only 1 way (a single vertical domino).
   - For `n = 2`, there are 2 ways (two vertical dominoes or two horizontal dominoes).

2. **Sliding window optimization**:
   - To calculate the number of ways to tile a 2x`n` board for `n >= 3`, we can use the recurrence:
     \\[
     dp[n] = 2 \	imes dp[n-1] + dp[n-3]
     \\]
   - This recurrence accounts for both domino and tromino placements. Instead of maintaining an array for all `n` values, we can use a sliding window to store only the last three values of `dp`.

3. **Iterative calculation**:
   - We initialize a sliding window with the base cases: `[dp[0], dp[1], dp[2]] = [1, 1, 2]`.
   - For each `n >= 3`, we compute `dp[n]` using the sliding window formula and update the window accordingly.

4. **Modulo operation**:
   - Since the result can be very large, we take the result modulo \\(10^9 + 7\\) to prevent overflow.

# Complexity

- **Time complexity**:  
  The time complexity is \\(O(n)\\) since we compute the number of ways for each board size from `3` to `n` iteratively.

- **Space complexity**:  
  The space complexity is \\(O(1)\\), as we only store the last three computed values in the sliding window.

# Code
```ruby
MOD = 1_000_000_007

def num_tilings(n)
    return 1 if n == 1
    return 2 if n == 2

    window = [1, 1, 2]

    (3..n).each do
        window << (2 * window[-1] + window[0]) % MOD
        window.shift
    end
    
    window.last
end
