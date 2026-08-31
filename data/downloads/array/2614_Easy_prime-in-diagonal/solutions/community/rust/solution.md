# Rust solution || beats 100%

**Author:** user7454af
**Votes:** 3
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/5265673/](https://leetcode.com/problems/prime-in-diagonal/solutions/5265673/)

---

# Intuition
Find the largest prime in the diagonals.

# Approach
Collect both diagonals into an array and sort in reversed order and then find the largest prime. Prime is checked by testing divisibility by odd numbers less than the sqrt of the number.

# Complexity
- Time complexity: $$O(n + m^{3/2})$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn diagonal_prime(nums: Vec<Vec<i32>>) -> i32 {
        let mut diags = Vec::with_capacity(4*nums.len());
        for i in 0..nums.len() {
            if nums[i][i] & 1 != 0 || nums[i][i] == 2 {
                diags.push(nums[i][i]);
            }
            if nums[nums.len()-i-1][i] & 1 != 0 || nums[nums.len()-i-1][i] == 2 {
                diags.push(nums[nums.len()-i-1][i]);
            }
        }
        diags.sort_by_key(|&n| -n);
        let is_prime = |n: i32| -> bool {
            if n == 1 {
                return false;
            }
            if n == 2 {
                return true;
            }
            let nf = n as f64;
            let sqn = f64::sqrt(nf) as i32 + 1;
            for i in (3..sqn).step_by(2) {
                if n % i == 0 {
                    return false;
                }
            }
            true
        };
        for &n in diags.iter() {
            if is_prime(n) {
                return n;
            }
        }
        0
    }
}
```