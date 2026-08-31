# Longest Prefix | Concise O(n) | Rust

**Author:** Prog_Jacob
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4304508/](https://leetcode.com/problems/make-three-strings-equal/solutions/4304508/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn find_minimum_operations(s1: String, s2: String, s3: String) -> i32 {
        let (n1, n2, n3) = (s1.len(), s2.len(), s3.len());
        let (mut i, n) = (0, n1.min(n2).min(n3));

        while i < n &&
              &s1[i..=i] == &s2[i..=i] &&
              &s2[i..=i] == &s3[i..=i] { i += 1 };
        
        if i == 0 { -1 } else { (n1 + n2 + n3 - 3 * i) as i32 }
    }
}
```