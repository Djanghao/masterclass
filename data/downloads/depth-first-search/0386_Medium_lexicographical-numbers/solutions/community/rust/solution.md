# [Rust] iterative

**Author:** tmtappr
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5814770/](https://leetcode.com/problems/lexicographical-numbers/solutions/5814770/)

---

# Approach
The order of numbers, being lexicographic, is less dependent on the actual value of the numbers, and more dependent on the magnitude of each digit relative to the digits of other numbers at the same offset.

Thinking of the numbers arranged as a tree where the left child of a node would be the current node's value raised an order of magnitude, $cur\\_val \	imes 10$, and the right child would be the current value incremented by one, $cur\\_val + 1$. An in order traversal is performed. Or you can think of it as a DFS traversal. 

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```rust []
impl Solution {
    pub fn lexical_order(n: i32) -> Vec<i32> {
        let mut lex_nums = Vec::with_capacity(n as usize);
        let mut stack    = Vec::with_capacity(n.ilog10() as usize + 2);

        stack.push(1);

        while let Some(val) = stack.pop() {
            if val <= n {
                lex_nums.push(val);
                if val % 10 < 9 {
                    stack.push(val + 1);
                }
                stack.push(val * 10);
            }
        }
        lex_nums
    }
}

```