# Rust recursive solution with HashMap

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1259285/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1259285/)

---

```rust
use std::cell::RefCell;
use std::collections::HashMap;
use std::rc::Rc;

impl Solution {
    pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        let hm = inorder
            .iter()
            .enumerate()
            .map(|(i, &val)| (val, i))
            .collect::<HashMap<_, _>>();
        Self::helper(&mut preorder.iter(), &hm, (0, preorder.len() as isize - 1))
    }
    fn helper(
        preorder: &mut std::slice::Iter<i32>,
        index_map: &HashMap<i32, usize>,
        range: (isize, isize),
    ) -> Option<Rc<RefCell<TreeNode>>> {
        if range.0 <= range.1 {
            if let Some(&val) = preorder.next() {
                if let Some(&i) = index_map.get(&val) {
                    return Some(Rc::new(RefCell::new(TreeNode {
                        val,
                        left: Self::helper(preorder, index_map, (range.0, i as isize - 1)),
                        right: Self::helper(preorder, index_map, (i as isize + 1, range.1)),
                    })));
                }
            }
        }
        None
    }
}
```