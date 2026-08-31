# Rust solution

**Author:** maojunhong2015
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2994876/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2994876/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn get_prime_factors_num(n: i32) -> Vec<i32> {
        let mut ans = vec![];
        let mut n2 = n;
        while n2 % 2 == 0 
        {
            ans.push(2);
            n2 = n2 / 2;
        }

        let t = (n2 as f64).sqrt() as i32;
        for i in (3..=t).step_by(2) {
            while n2 % i == 0 {
                ans.push(i);
                n2 = n2 / i;
            }
        }

        if n2 > 2 {
            ans.push(n2);
        }
        return ans;
    }
    pub fn distinct_prime_factors(nums: Vec<i32>) -> i32 {
        let mut hash: HashSet<i32> = HashSet::new();
        for x in nums.iter() {
            let a = Self::get_prime_factors_num(*x);
            for y in a.iter() {
                hash.insert(*y);
            }
        }
        hash.len() as i32
    }
}

```