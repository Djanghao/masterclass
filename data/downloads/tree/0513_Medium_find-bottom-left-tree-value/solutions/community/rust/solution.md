# flat_map filter_map

**Author:** bryceat
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/3269469/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/3269469/)

---

# Intuition
Traverse the tree one level at a time while tracking the left most value.

# Approach
BFS.

Note: using an array then filter_map is faster than building a Vec of the correct length for each node.

# Complexity
- Time complexity:
O(n) the number of nodes

- Space complexity:
O(n) the max width of the tree

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn find_bottom_left_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut level = Vec::from([root.unwrap()]);
        let mut ans: i32 = 0;
        while !level.is_empty() {
            ans = level[0].borrow().val;
            level = level.into_iter()
                .flat_map(|n| [n.borrow().left.clone(),n.borrow().right.clone()])
                .filter_map(|n| n).collect();
        }
        ans
    }
}
```