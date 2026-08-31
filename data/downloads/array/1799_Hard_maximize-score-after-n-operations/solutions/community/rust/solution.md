# Rust Bitmask DP with Analysis

**Author:** xiaoping3418
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3059354/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3059354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
let n be nums.len() and k be n / 2, obviously, we have k * (2 * k - 1) number of ways to select an i and a j such that 0 <= i < j < n.
Use this fact, we can recursively come up with the number of ways to group 2 * k indexes into ordered k pairs ( cnt[k] = k * (2 * k - 1) * cnt[k - 1] ).

k => pair(s)
1 => 1
2 => 6
3 => 90
4 => 2520
5 => 113400
6 => 7484400
7 => 681080400 

These numbers simply tell us that using brute force barely helps us to handle the case when k <= 6. 

For a specific k, the ways of selecting k pairs might be unique, HOWEVER, SOME OF THEM COULD BE COMBINED in calculating the final solution. 
Let's say k is 7, four different indexes 0 <= i, j, u, v < 14 have been selected for the 6th round & 7th round, does the order these four indexes used in 6th round & 7th round have any impact on selecting the pair from the remaining indexes for the 5th round? 
The answer is NO! Therefore, we can use mask (1<<i|1<<j|1<<u|1<<v) to indicate that i, j, u, v are unavailable in the recursive call of selecting the 5th pair.   

# Approach
<!-- Describe your approach to solving the problem. -->
dynamic programming using bitmasking.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn max_score(nums: Vec<i32>) -> i32 {
        let mut dp = vec![-1; 1 << nums.len()];
        Self::eval(&nums, 0, &mut dp)
    }

    fn gcd(a: i32, b: i32) -> i32 {
        if a < b { return Self::gcd(b, a); }
        if a % b == 0 { return b }
        Self::gcd(b, a % b)
    } 

    fn eval(nums: &Vec<i32>, mask: usize, dp: &mut Vec<i32>) -> i32 {
        if dp[mask] != -1 { return dp[mask] }

        let mut k = nums.len();
        for i in 0 .. nums.len() {
            if mask & 1 << i != 0 { k -= 1; }
        }
        k >>= 1;
        if k == 0 { return 0 } 

        dp[mask] = 0;
        for i in 0 .. nums.len() {
            for j in i + 1 .. nums.len() {
                if mask & 1 << i != 0 || mask & 1 << j != 0 { continue }
                let mask_new = mask | 1 << i | 1 << j;
                dp[mask] = dp[mask].max(k as i32 * Self::gcd(nums[i], nums[j]) + Self::eval(nums, mask_new, dp));
            }
        }
        
        dp[mask]
    }
}
```