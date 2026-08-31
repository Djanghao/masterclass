# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2928786/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2928786/)

---

# Code
```
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn minimum_operations(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        use std::collections::VecDeque;

        fn min_swaps(arr: &[i32]) -> i32 {
            let n = arr.len();
            let mut arr_pos = vec![(0, 0); n];
            for i in 0..n {
                arr_pos[i].0 = arr[i];
                arr_pos[i].1 = i;
            }
            arr_pos.sort();
            let mut vis = vec![false; n];
            let mut ans = 0;
            for i in 0..n {
                if vis[i] || arr_pos[i].1 == i {
                    continue;
                }
                let mut temp = 0;
                let mut j = i;
                while !vis[j] {
                    vis[j] = true;
                    j = arr_pos[j].1;
                    temp += 1;
                }
                if temp > 0 {
                    ans += temp - 1;
                }
            }
            ans
        }

        fn _minimum_operations(root: Option<Rc<RefCell<TreeNode>>>) -> Option<i32> {
            let mut q = VecDeque::new();
            q.push_back(root);
            let mut ans = 0;
            let mut v = Vec::new();
            while !q.is_empty() {
                v.clear();
                let sz = q.len();
                for _ in 0..sz {
                    let node = q.pop_front()?;
                    v.push(node.as_ref()?.borrow().val);
                    let left = node.as_ref()?.borrow().left.clone();
                    if left.is_some() {
                        q.push_back(left);
                    }
                    let right = node.as_ref()?.borrow().right.clone();
                    if right.is_some() {
                        q.push_back(right);
                    }
                }
                ans += min_swaps(&v);
            }
            Some(ans)
        }

        _minimum_operations(root).unwrap_or(0)
    }
}
```