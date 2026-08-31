# DP

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/4366002/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/4366002/)

---

# Intuition
The answer is the maximum between: 
1) the answer for k=1, 
2) the sum of the whole array multiplied by k, 
3) or the maximum suffix sum plus the maximum prefix sum,
4) or the maximum suffix sum plus the maximum prefix sum plus (k-2) multiplied by the whole array sum for k > 1.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Dynamic Programming
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $arr$ array.

# Code
```
use std::cmp::max;

const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn k_concatenation_max_sum(arr: Vec<i32>, k: i32) -> i32 {
        let k = k as i64;
        let n = arr.len();        

        let mut v = arr.iter().cloned().sum::<i32>() as i64;        
        
        let mut r = max(0, v * k);
        
        let mut s = 0;        

        for i in 0..n {
            s = max(s + arr[i] as i64, arr[i] as i64);
            r = max(r, s);
        }

        if k > 1 {
            let mut t = 0;
            let mut p = 0;        

            for i in 0..n {
                t += arr[n - 1 - i] as i64;
                p = max(p, t);
            }

            let mut t = 0;
            let mut s = 0;

            for i in 0..n {
                t += arr[i] as i64;
                s = max(s, t);
            }

            r = max(r, p + s);
            r = max(r, p + s + (k - 2) * v)
        }

        (r % MOD) as i32
    }
}
```