# one line solution beat 100%

**Author:** maswangy
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/3704872/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/3704872/)

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
impl Solution {
    pub fn query_string(s: String, n: i32) -> bool {
        (1..n+1).into_iter().map(|n| format!("{:b}",n)).all(|n| s.find(n.as_str()).is_some())
    }
}
```