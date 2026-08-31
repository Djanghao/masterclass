# Rust recursive lo, hi

**Author:** 54k
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/3198732/](https://leetcode.com/problems/maximum-binary-tree/solutions/3198732/)

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
    pub fn construct_maximum_binary_tree(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        use std::collections::*;
        let map = nums
            .iter()
            .enumerate()
            .map(|(i, x)| (*x, i as i32))
            .collect::<HashMap<i32, i32>>();
        fn dfs(
            nums: &[i32],
            lo: i32,
            hi: i32,
            map: &HashMap<i32, i32>,
        ) -> Option<Rc<RefCell<TreeNode>>> {
            if lo <= hi {
                let max = nums[lo as usize..=hi as usize].iter().max().unwrap();
                let max_idx = *map.get(max).unwrap();

                let left = dfs(nums, lo, max_idx - 1, map);
                let right = dfs(nums, max_idx + 1, hi, map);

                Some(Rc::new(RefCell::new(TreeNode {
                    val: *max,
                    left,
                    right,
                })))
            } else {
                None
            }
        }
        dfs(&nums, 0, nums.len() as i32 - 1, &map)
    }
}
```