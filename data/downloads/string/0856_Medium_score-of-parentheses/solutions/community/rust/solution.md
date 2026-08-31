# Rust | 0ms | 2mb |

**Author:** astroex
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/1859042/](https://leetcode.com/problems/score-of-parentheses/solutions/1859042/)

---

Runtime: 0 ms, faster than 100.00% of Rust online submissions for Score of Parentheses.
Memory Usage: 2 MB, less than 100.00% of Rust online submissions for Score of Parentheses.

```
impl Solution {
    pub fn score_of_parentheses(s: String) -> i32 {
        let mut stack = vec![0];
        for ch in s.chars() { 
            match ch  { 
                '(' => stack.push(0),
                _ => { 
                    let v = stack.pop().unwrap();
                    *stack.last_mut().unwrap() += i32::max(2 * v, 1)
                }
            }
        }
        stack.pop().unwrap()
    }
}
```