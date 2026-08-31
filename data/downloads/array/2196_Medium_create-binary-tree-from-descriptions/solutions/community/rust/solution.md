# Rust | O(n) | HashMap

**Author:** dmitry-shulaykin
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5482684/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5482684/)

---

# Approach
Build temporary flat map parent to children and then use it to create tree recursively.

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn create_binary_tree(descriptions: Vec<Vec<i32>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut hm: HashMap<i32, [i32; 2]> = HashMap::new();
        let mut s = HashSet::new();

        for description in &descriptions {
            let parent = description[0];
            s.insert(description[1]);

            match hm.get_mut(&parent) {
            Some(v) => { 
                if description[2] == 1 {
                    v[0] = description[1]; 
                } else {
                    v[1] = description[1]; 
                }
            }
            None => { 
                if description[2] == 1 {
                    hm.insert(parent, [description[1], 0]);
                } else {
                    hm.insert(parent, [0, description[1]]);
                }
            }
            }
        }

        let mut root = 0;
        for description in &descriptions {
            if !s.contains(&description[0]) {
                root = description[0];
                break;
            }
        }

        let mut root_node = Rc::new(RefCell::new(TreeNode::new(root)));
        Self::build(&mut root_node, &hm);
        Some(root_node)
    }


    fn build(parent: &mut Rc<RefCell<TreeNode>>, hm: &HashMap<i32, [i32; 2]>) {
        let mut parent = parent.borrow_mut();

        if let Some(children) = hm.get(&parent.val) {
            if children[0] != 0 {
                let mut node = Rc::new(RefCell::new(TreeNode::new(children[0])));
                Self::build(&mut node, hm);
                parent.left = Some(node);
            }

            if children[1] != 0 {
                let mut node = Rc::new(RefCell::new(TreeNode::new(children[1])));
                Self::build(&mut node, hm);
                parent.right = Some(node);
            }
        }
    }
}
```