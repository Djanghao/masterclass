# Just a runnable solution.

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/2865683/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/2865683/)

---

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::HashMap;
impl Solution {
    pub fn find_frequent_tree_sum(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut map = HashMap::new();
        Self::dfs(root, &mut map);
        let mut max = 0;
        for (_, v) in map.iter() {
            max = max.max(*v);
        }
        let mut result = Vec::new();
        for (k, v) in map.iter() {
            if *v == max {
                result.push(*k);
            }
        }
        result
    }

    fn dfs(root: Option<Rc<RefCell<TreeNode>>>, map: &mut HashMap<i32, i32>) -> i32 {
        if let Some(node) = root {
            let node = node.borrow();
            let sum = node.val + Self::dfs(node.left.clone(), map) + Self::dfs(node.right.clone(), map);
            *map.entry(sum).or_insert(0) += 1;
            sum
        } else {
            0
        }
    }
}
```