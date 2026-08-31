# Greedy + Sorting + Binary Search

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5786864/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5786864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Greedy + Sorting + Binary Search

# Complexity
- Time complexity: $O(n \\cdot logm)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $start$ array, and $m = max(start) - min(start)$

# Code
```rust []
impl Solution {
    pub fn max_possible_score(mut start: Vec<i32>, d: i32) -> i32 {        
        let n = start.len();                

        start.sort_unstable();        

        let mut l = 0;
        let mut r = ((start[n - 1] + d - start[0]) / (n as i32 - 1)) as i64;

        let d = d as i64;

        while l < r {
            let m = (l + r + 1) / 2;

            if Self::check(&start, m, d, n) {
                l = m;
            } else {
                r = m - 1;
            }
        }

        l as i32
    }

    pub fn check(a: &Vec<i32>, s: i64, d: i64, n: usize) -> bool {
        let mut l = a[0] as i64;

        for i in 1..n {
            if l + s < a[i] as i64 {
                l = a[i] as i64;
            } else if l + s <= a[i] as i64 + d {
                l += s;
            } else {
                return false;
            }
        }

        true
    }
}
```