# Rust stack solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3937870/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3937870/)

---

# Code
```
impl Solution {
    pub fn is_preorder(nodes: Vec<Vec<i32>>) -> bool {
        let mut stack = vec![vec![-1, -1]];
        for i in 0..nodes.len() {
            let child = nodes[i].clone();
            while stack.len() > 0 && stack.last().unwrap()[0] != child[1] {
                stack.pop();
                if stack.is_empty() {
                    return false;
                }
            }
            stack.push(child);
        }
        true
    }
}
```