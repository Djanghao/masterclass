# Rust - blazingly fast 1 pass loop with nest level tracking

**Author:** lysender
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/4782712/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/4782712/)

---

# Intuition

I thought this is a stack problem where I can push and pop parenthesis to/from the stack to track each component.

# Approach

Turns out I don't need a stack at all. We just need to loop each character and track the nesting level. Insert any character where nest level is not zero.

Nest level increases on `(` and decreases on `)`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn remove_outer_parentheses(s: String) -> String {
        let mut answer: String = String::new();
        let mut level: i32 = 0;

        for c in s.chars() {
            if c == '(' {
                if level > 0 {
                    answer.push(c);
                }
                level += 1;
            } else {
                level -= 1;
                if level > 0 {
                    answer.push(c);
                }
            }
        }
        answer
    }
}
```