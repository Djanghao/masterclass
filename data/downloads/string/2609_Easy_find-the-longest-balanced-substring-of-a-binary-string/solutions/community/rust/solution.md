# Intuitive I Guess | Rust

**Author:** Prog_Jacob
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368454/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368454/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
pub fn find_the_longest_balanced_substring(s: String) -> i32 {
    let (mut seq_0, mut seq_1, mut ans, mut one) = (0, 0, 0, false);

    for ch in s.chars() {
        if ch == '0' {
            if one { seq_0 = 0; seq_1 = 0; one = false };
            seq_0 += 1;
        } else {
            one = true;
            seq_1 += 1;
            ans = ans.max(seq_0.min(seq_1));
        }
    }
    
    ans * 2
}
```