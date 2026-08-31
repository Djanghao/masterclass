# Brute Force

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5702288/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5702288/)

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
where $n$ is the length of the $s$ string

# Code
```rust []
impl Solution {
    pub fn count_k_constraint_substrings(s: String, k: i32) -> i32 {
        let n = s.len();
        let mut b = s.as_bytes();

        let mut r = 0;

        for i in 0..n {
            let mut o = 0;
            let mut z = 0;

            for j in i..n {
                if b[j] == b'1' {
                    o += 1;                    
                } else {
                    z += 1;
                }

                if o > k && z > k {
                    break;
                }

                r += 1;
            }
        }

        r
    }
}
```