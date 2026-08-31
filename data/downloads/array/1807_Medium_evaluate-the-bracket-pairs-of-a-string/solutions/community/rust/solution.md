# Concise Two Pointers with HashMap | Beats 100% | Rust & Python

**Author:** Prog_Jacob
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/4423335/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/4423335/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)\\ extra\\ memory$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Rust Code
```rust
use std::collections::HashMap;
impl Solution {
    pub fn evaluate(s: String, k: Vec<Vec<String>>) -> String {
        let map: HashMap<_, _> = k.iter().map(|p| (p[0].as_str(), p[1].as_str())).collect();
        let mut ans = String::with_capacity(s.len());
        let mut l = usize::MAX;

        for (r, ch) in s.chars().enumerate() {
            match ch {
                '(' => l = r + 1,
                ')' => {
                    ans.push_str(map.get(&s[l..r]).unwrap_or(&"?"));
                    l = usize::MAX;
                }
                ch if l == usize::MAX => ans.push(ch),
                _ => (),
            }
        }

        ans
    }
}
```

# Python3 Code
```python
class Solution:
    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        map = { k:v for [k, v] in knowledge }
        res, l = "", 0

        for (r, ch) in enumerate(s):
            if ch == '(':
                l = r + 1
            elif ch == ')':
                res += map.get(s[l:r], '?')
                l = 0
            elif l == 0:
                res += ch
        
        return res
```