# Brute Force

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/6009724/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/6009724/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Brute Force

# Complexity
- Time complexity: $O(n^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is length of the $nums$ array.

# Code
```rust []
impl Solution {
    pub fn max_score(nums: Vec<i32>) -> i64 {
        let n = nums.len();

        if n == 1 {
            return (nums[0] * nums[0]) as i64;
        }

        let mut r = 0;

        for i in 0..=n {
            r = r.max(
                Self::factor(i, &nums)
            );
        }

        r
    }

    pub fn factor(i: usize, v: &Vec<i32>) -> i64 {
        let n = v.len();

        let mut d = if i == 0 {v[1] as i64} else {v[0] as i64};
        let mut m = 1;

        for j in 0..n {
            if j != i {
                d = Self::gcd(d, v[j] as i64);
                m = Self::lcm(m, v[j] as i64);
            }
        }

        m*d
    }

    pub fn gcd(a: i64, b: i64) -> i64 {
        if a % b == 0 {
            return b;
        }

        Self::gcd(b, a % b)
    }

    pub fn lcm(a: i64, b: i64) -> i64 {
        (a * b) / Self::gcd(a, b)
    }
}
```