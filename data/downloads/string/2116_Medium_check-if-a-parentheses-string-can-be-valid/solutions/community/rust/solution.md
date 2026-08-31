# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/2671941/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/2671941/)

---

```
use std::collections::*;

impl Solution {
    pub fn can_be_valid(s: String, locked: String) -> bool {
        let mut s = s.chars().collect::<Vec<char>>();
        let l = locked.chars().collect::<Vec<char>>();

        let mut stack = vec![];
        let mut set = HashSet::new();

        for i in 0..s.len() {
            let c = s[i];
            if l[i] == '1' {
                if stack.is_empty() {
                    stack.push((c, i));
                } else {
                    let li = stack.len() - 1;
                    if c == '(' {
                        stack.push((c,i));
                    } else if c == ')' && stack[li].0 == '(' {
                        set.insert(stack[li].1);
                        set.insert(i);
                        stack.pop();
                    } else {
                        stack.push((c,i));
                    }
                }
            }
        }

        for (c,i) in stack {
            if c == '(' {
                s[i] = '1';
            } else {
                s[i] = '2';
            }
        }

        let mut memo = vec![];
        for i in 0..s.len() {
            if !set.contains(&i) {
                memo.push(s[i]);
            }
        }

        let mut memo2 = vec![];
        for c in memo {
            if c == '2' {
                if memo2.is_empty() {
                    return false;
                }
                memo2.pop();
            } else {
                memo2.push(c);
            }
        }
        let mut memo3 = vec![];
        for i in (0..memo2.len()).rev() {
            let c = memo2[i];
            if c == '1' {
                if memo3.is_empty() {
                    return false;
                }
                memo3.pop();
            } else {
                memo3.push(c);
            }
        }
        memo3.len() % 2 == 0
    }
}
```