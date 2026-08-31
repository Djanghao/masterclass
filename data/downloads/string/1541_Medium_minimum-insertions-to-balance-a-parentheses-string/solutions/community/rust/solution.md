# 5m beats 100% | neat 1-pass rust solution | 20 lines after rustfmt

**Author:** abdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/5572749/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/5572749/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
	pub fn min_insertions(s: String) -> i32 {
        let mut it = s.bytes().peekable();
        let mut st = 0;
        let mut ans = 0;
        while let Some(c) = it.next() {
            match c {
                b'(' => st += 1,
                _ /* b')'*/ => {
                    if it.next_if(|c| *c == b')').is_none() {
                        ans += 1;
                    }
                    match st {
                        0 => ans += 1,
                        _ => st -= 1,
                    }
                }
            }
        }
        ans + st * 2
    }
}
```