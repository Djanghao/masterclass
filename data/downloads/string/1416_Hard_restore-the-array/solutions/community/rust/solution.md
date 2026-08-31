# Rust | 1D DP

**Author:** icyrainz
**Votes:** 3
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3446778/](https://leetcode.com/problems/restore-the-array/solutions/3446778/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to determine the number of possible arrays that can be printed as a string of digits without whitespaces. We know that all integers in the array were in the range `[1, k]`, and there are no leading zeros in the array.

# Approach
<!-- Describe your approach to solving the problem. -->
We can use dynamic programming to solve the problem. Let `dp[i]` be the number of possible arrays that can be printed using the digits from `i` to `n-1` in the input string `s`. We can compute `dp[i]` recursively using the following formula:
- `dp[i] = sum(dp[j+1]) for i <= j < n`, if` s[i..j+1]` is a valid number (i.e., <= k and has no leading zero)
- `dp[i] = 0`, otherwise

The base case is `dp[n] = 1`, since there is only one way to print an empty array.

The answer to the problem is `dp[0]`, which represents the number of possible arrays that can be printed using the entire input string `s`.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The algorithm scans the input string `s` once and performs a nested loop over the remaining digits for each digit, so the time complexity is $$O(n^2)$$. However, since we only need to compute `dp[i]` once, we can also consider the time complexity as $$O(n)$$.
- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The algorithm uses an array of size `n+1` to store the values of `dp`.

# Code
```
impl Solution {
    const MODULO: usize = 1_000_000_007;
    pub fn number_of_arrays(s: String, k: i32) -> i32 {
        let k = k as usize;
        let n = s.len();

        let s_bytes = s.as_bytes();

        let mut dp = vec![0; n + 1];
        dp[n] = 1;

        for i in (0..n).rev() {
            let mut num: usize = 0;
            for j in i..n {
                num = num * 10 + (s_bytes[j] - b'0') as usize;
                if num > k || s_bytes[i] == b'0' {
                    break;
                }
                dp[i] = (dp[i] + dp[j + 1]) % Self::MODULO;
            }
        }

        dp[0] as i32
    }
}
```