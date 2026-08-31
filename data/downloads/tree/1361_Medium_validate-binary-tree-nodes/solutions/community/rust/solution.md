# [🦀] Rust O(n)/O(n) BFS solution 9ms/2.62Mb (beats 100%)

**Author:** Tsimon-Dorakh
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4179987/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4179987/)

---

![image.png](./images/0.png)

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
use std::collections::VecDeque;
use std::collections::HashSet;

impl Solution {
    pub fn validate_binary_tree_nodes(n: i32, ls: Vec<i32>, rs: Vec<i32>) -> bool {
        let mut sum: i32 = 0;

        for i in 0..ls.len() {
            if (ls[i] != -1) { sum += ls[i] }
            if (rs[i] != -1) { sum += rs[i] }
        }

        let mut q: VecDeque<i32> = VecDeque::new();
        let root: i32 = n * (n - 1) / 2 - sum;
        if (root < 0 || root >= n) { return false }
        else { q.push_back(root) }

        let mut v: HashSet<usize> = HashSet::new();
        while let Some(i) = q.pop_front() {
            let i = i as usize;

            if (v.contains(&i)) { return false }
            
            v.insert(i);

            if (ls[i] != -1) { q.push_back(ls[i]) }
            if (rs[i] != -1) { q.push_back(rs[i]) }
        }

        v.len() == n as usize
    }
}

```

