# Dynamic Programming

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-multiplication-score/solutions/5794903/](https://leetcode.com/problems/maximum-multiplication-score/solutions/5794903/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic Programming

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $b$ array

# Code
```rust []
impl Solution {
    pub fn max_score(a: Vec<i32>, b: Vec<i32>) -> i64 {
        let n = b.len();

        let mut b1 = a[0] as i64 * b[0] as i64;
        let mut b2 = a[1] as i64 * b[1] as i64 + b1;

        b1 = b1.max(a[0] as i64 * b[1] as i64);

        let mut b3 = a[2] as i64 * b[2] as i64 + b2;

        b2 = b2.max(a[1] as i64 * b[2] as i64 + b1);
        b1 = b1.max(a[0] as i64 * b[2] as i64);

        let mut b4 = a[3] as i64 * b[3] as i64 + b3;

        b3 = b3.max(a[2] as i64 * b[3] as i64 + b2);
        b2 = b2.max(a[1] as i64 * b[3] as i64 + b1);
        b1 = b1.max(a[0] as i64 * b[3] as i64);

        for i in 4..n {
            b4 = b4.max(a[3] as i64 * b[i] as i64 + b3);
            b3 = b3.max(a[2] as i64 * b[i] as i64 + b2);
            b2 = b2.max(a[1] as i64 * b[i] as i64 + b1);
            b1 = b1.max(a[0] as i64 * b[i] as i64);
        }

        b4
    }    
}
```