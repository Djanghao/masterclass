# Simple Rust solution

**Author:** chen17981
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5285266/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5285266/)

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
    pub fn number_of_substrings(s: String) -> i64 {
        let mut cnts = [0_i64; 26];
        let mut res = 0_i64;

        s.chars().collect::<Vec<char>>().iter().fold(0_i64, |mut res, it| {
            res += 1;
            res += cnts[*it as usize - 'a' as usize];
            cnts[*it as usize - 'a' as usize] += 1;
            res
        })
    }
}
```