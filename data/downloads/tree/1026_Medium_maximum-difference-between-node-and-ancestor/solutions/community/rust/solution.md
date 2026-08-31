# Rust MinMax Solution

**Author:** michielbaird
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/929217/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/929217/)

---

```
use std::cmp;
use std::rc::Rc;
use std::cell::RefCell;

struct MinMax {
    min: i32,
    max: i32,
    answer: i32
}

impl Solution {
    fn minMax(node_ref: Rc<RefCell<TreeNode>>) -> MinMax {
        let node = node_ref.borrow();
        let mut a = MinMax {
            min: node.val,
            max: node.val,
            answer: 0,
        };
        if node.left.is_none() && node.right.is_none() {
            a
        } else {
            let children = vec![&node.left, &node.right];
            for child_option in children.iter() {
                if let Some(child) = child_option {
                    let c = Self::minMax(Rc::clone(&child));
                    a.answer = cmp::max(a.answer, c.answer);
                    a.answer = cmp::max(a.answer, (node.val - c.min).abs());
                    a.answer = cmp::max(a.answer, (node.val - c.max).abs());
                    a.min = cmp::min(a.min, c.min);
                    a.max = cmp::max(a.max, c.max);
                }
            }
            a
        }
    }
    pub fn max_ancestor_diff(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        if let Some(node_ref) = root {
            Self::minMax(Rc::clone(&node_ref)).answer    
        } else {
            panic!("bad_input");
        }
    }
}
```