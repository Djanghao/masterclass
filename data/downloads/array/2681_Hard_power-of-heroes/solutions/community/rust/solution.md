# Rust Sorting

**Author:** xiaoping3418
**Votes:** 2
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3520541/](https://leetcode.com/problems/power-of-heroes/solutions/3520541/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N * Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn sum_of_power(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let MOD = 1_000_000_007;
        let mut nums = nums;
        nums.sort();

        let mut data = vec![0; n];
        let mut ret = 0;

        for i in 0 .. n {
            data[i] = nums[i] as i64;
            if i > 0 { data[i] = (data[i] + 2 * data[i - 1]) % MOD; }

            let mut t = nums[i] as i64;
            if i > 0 { t = (t + data[i - 1]) % MOD; }
            t = (t * nums[i] as i64) % MOD;
            t = (t * nums[i] as i64) % MOD;
            ret = (ret + t) % MOD;
        }

        ret as _
    }
}
```