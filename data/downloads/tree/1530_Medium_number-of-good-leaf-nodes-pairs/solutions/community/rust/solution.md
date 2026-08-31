# Rust - Beats 100% both runtime and memory  🔥

**Author:** henkeb
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5495645/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5495645/)

---

# Approach
Keep track of $node\\_pairs$.

The dfs functions returns a vector of leaf node distances.
If $node$ does not exist (None), then return an empty vector. This is our base case.

If left and right has a vector of leaf nodes, then check distance between left and right leaf nodes. Increment $node\\_pairs$ if the distance is OK. Merge left and right vectors, increment the values (distance) by 1 and return. 

If only left/right child has a vector, then increment their values (distance) and return the vector.

If node is a leaf node --> return a vector with distance 1. 

# Complexity
- Time complexity: $$O(n\xB2)$$?

- Space complexity:$$O(n)$$
# Code
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn count_pairs(root: Option<Rc<RefCell<TreeNode>>>, distance: i32) -> i32 {
        let mut node_pairs: i32 = 0;
        Self::dfs(root, distance, &mut node_pairs);
        node_pairs
    }

    fn dfs(node: Option<Rc<RefCell<TreeNode>>>, distance: i32, node_pairs: &mut i32) -> Vec<i32> {
        if let Some(node) = node {
            let mut left = Self::dfs(node.borrow().left.clone(), distance, node_pairs);
            let mut right = Self::dfs(node.borrow().right.clone(), distance, node_pairs);
            match (!left.is_empty(), !right.is_empty()) {
                (true, true) => {
                    for i in left.iter() {
                        for j in right.iter() {
                            if i + j <= distance {
                                *node_pairs += 1;
                            }
                        }
                    }
                    left.append(&mut right);
                    left.iter_mut().for_each(|val| *val += 1);
                    left
                }
                (true, false) => {
                    left.iter_mut().for_each(|val| *val += 1);
                    left
                }
                (false, true) => {
                    right.iter_mut().for_each(|val| *val += 1);
                    right
                }
                (false, false) => vec![1],
            }
        } else {
            vec![]
        }
    }
}


```