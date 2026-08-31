# DP

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4353965/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4353965/)

---

# Intuition
For each index $i$ of the $arr$ we have 2 states:
1) always take $arr[i]$
2) do not take $arr[i]$, but take all previous elements
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Dynamic Programming
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the number of the elements of the $arr$

# Code
```
use std::cmp::max;

impl Solution {
    pub fn maximum_sum(arr: Vec<i32>) -> i32 {
        let mut s1 = 0;
        let mut s2 = 0;

        let mut r = i32::MIN;                
        let mut s = i32::MIN;

        for n in arr {
            s = max(n, max(s1 + n, s2 + n));

            s2 = max(s1, s2 + n);
            s1 = max(n, s1 + n);            

            r = max(r, s);            
        }

        r
    }
}
```