# Longest Common Subsequence

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5264816/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5264816/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Longest Common Subsequence

# Complexity
- Time complexity: $O(n + m \\cdot logn)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $m$ is the length of the $arr$, and $n$ is the length of the $target$

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn min_operations(target: Vec<i32>, arr: Vec<i32>) -> i32 {
        let n = target.len();
        let m = arr.len();

        let mut h = HashMap::new();

        for i in 0..n {
            h.insert(target[i], i);
        }

        let mut v = Vec::new();

        for i in 0..m {
            if h.contains_key(&arr[i]) {
                let j = h[&arr[i]];
                let k = v.partition_point(|&l| l < j);

                if k == v.len() {
                    v.push(j);
                } else {
                    v[k] = j;
                }
            }
        }  

        (n - v.len()) as i32
    }    
}
```