# Rust Solution using dfs and bfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/2317343/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/2317343/)

---

At first, I create an adjacency list using dfs.
Second, I used bfs to calculate distance p and q.

```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::*;
const INF:i32 = 1_000_000_000;
impl Solution {
    pub fn find_distance(root: Option<Rc<RefCell<TreeNode>>>, p: i32, q: i32) -> i32 {
        if p == q {
            return 0
        }

        let root = root.unwrap();
        let mut helper = Helper { map:HashMap::new(), i:0, g:vec![] };
        helper.culc1(&root);
        let n = helper.map.keys().len();
        helper.g = vec![vec![];n];
        helper.culc2(&root, INF as usize);

        let si = *helper.map.get(&p).unwrap();
        let ti = *helper.map.get(&q).unwrap();

        let mut memo = vec![INF;helper.map.keys().len()];
        memo[si] = 0;
        let mut stack = vec![(si,0)];

        while !stack.is_empty() {
            let mut new_stack = vec![];
            while let Some((ci,v)) = stack.pop() {
                let nv = v + 1;
                for &ni in &helper.g[ci] {
                    if nv < memo[ni] {
                        memo[ni] = nv;
                        new_stack.push((ni, nv));
                    }
                }
            }
            stack = new_stack;
        }
        memo[ti] - memo[si]
    }
}

struct Helper {
    map: HashMap<i32, usize>,
    i: usize,
    g: Vec<Vec<usize>>
}

impl Helper {
    fn culc1(&mut self, node:&Rc<RefCell<TreeNode>>) {
        self.map.insert(node.borrow().val, self.i);
        self.i += 1;
        if let Some(left) = &node.borrow().left {
            self.culc1(&left);
        }

        if let Some(right) = &node.borrow().right {
            self.culc1(&right);
        }
    }

    fn culc2(&mut self, node:&Rc<RefCell<TreeNode>>, li:usize) {
        let ci = *self.map.get(&node.borrow().val).unwrap();
        if li as i32 != INF {
            self.g[li].push(ci);
            self.g[ci].push(li);
        }

        if let Some(left) = &node.borrow().left {
            self.culc2(&left, ci);
        }

        if let Some(right) = &node.borrow().right {
            self.culc2(&right, ci);
        }
    }
}
```