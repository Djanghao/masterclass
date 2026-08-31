# Straightforward stack solution in Scala | Rust | C++ | Python

**Author:** Tomas245
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5896754/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5896754/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Create `stack` (or deque) to push and pop elements in constant time.
Iterate over `s` char by char. If `stack` is not empty and first out element is `(`  and char is `)`, than we pop `(` from `stack` and remove pair of parentheses. Other way we just append new element to `stack`.
At the end return size of `stack`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n)`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(n)`

# Code
```scala []
object Solution {
    def minAddToMakeValid(s: String): Int = {
        val stack = new scala.collection.mutable.Stack[Char]
        for (c <- s) {
            if (!stack.isEmpty && stack.head == '(' && c == ')') {
                stack.pop()
            } else {
                stack.push(c)
            }
        }
        stack.length
    }
}
```
```rust []
impl Solution {
    pub fn min_add_to_make_valid(s: String) -> i32 {
        let mut stack: std::collections::VecDeque<char> = std::collections::VecDeque::new();
        for c in s.chars() {
            if (!stack.is_empty() && stack.back() == Some(&'(') && c == ')') {
                stack.pop_back();
            } else {
                stack.push_back(c);
            }
        }
        stack.len() as i32
    }
}
```
```cpp []
class Solution {
public:
    int minAddToMakeValid(string s) {
        std::stack<char> st;
        for (char& c: s) {
            if (!st.empty() && st.top() == '(' && c == ')') {
                st.pop();
            } else {
                st.push(c);
            }
        }
        return st.size();
    }
};
```
```python []
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        stack = deque()
        for c in s:
            if stack and stack[-1] == '(' and c == ')':
                stack.pop()
            else:
                stack.append(c)
        return len(stack)

```