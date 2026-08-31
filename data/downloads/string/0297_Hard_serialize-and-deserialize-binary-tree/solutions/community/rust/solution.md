# Rust solution

**Author:** sunjesse
**Votes:** 1
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/5967122/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/5967122/)

---

# Code
```rust []
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
use std::collections::VecDeque;
struct Codec {

}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Codec {
    fn new() -> Self {
        Codec {}
    }

    fn serialize(&mut self, root: Option<Rc<RefCell<TreeNode>>>) -> String {
        let mut q: VecDeque<Option<Rc<RefCell<TreeNode>>>> = VecDeque::from([root]);
        let mut s: Vec<String> = Vec::new();
        while let Some(node_opt) = q.pop_front() {
            if let Some(node) = node_opt {
                let node_b = node.borrow();
                s.push(node_b.val.to_string());

                if let Some(node_left) = &node_b.left {
                    q.push_back(Some(node_left.clone()));
                } else {
                    q.push_back(None);
                }

                if let Some(node_right) = &node_b.right {
                    q.push_back(Some(node_right.clone()));
                } else {
                    q.push_back(None);
                }
            } else {
                s.push("#".to_string());
            }
        }
        s.join(",")
    }
	
    fn deserialize(&self, data: String) -> Option<Rc<RefCell<TreeNode>>> {
        let mut q: VecDeque<Option<Rc<RefCell<TreeNode>>>> = VecDeque::new();
        let mut vals: VecDeque<&str> = data.split(",").collect();
        let mut root: Option<Rc<RefCell<TreeNode>>> = None;
        let root_val: Option<i32> = vals.pop_front().and_then(|s| s.parse::<i32>().ok());
        if let Some(v) = root_val { 
            root = Some(Rc::new(RefCell::new(TreeNode::new(v))));
            q.push_back(root.clone());
        }

        while let Some(node_opt) = q.pop_front() {
            if let Some(node) = node_opt {
                let mut node_b = node.borrow_mut();

                // on the left
                if let Some(lv) = vals.pop_front().and_then(|s| s.parse::<i32>().ok()) {
                    let node_left = Some(Rc::new(RefCell::new(TreeNode::new(lv))));
                    node_b.left = node_left.clone();
                    q.push_back(node_left);
                }
                // on the right
                if let Some(rv) = vals.pop_front().and_then(|s| s.parse::<i32>().ok()) {
                    let node_right = Some(Rc::new(RefCell::new(TreeNode::new(rv))));
                    node_b.right = node_right.clone();
                    q.push_back(node_right);
                }
            }
        }

        root
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec::new();
 * let data: String = obj.serialize(strs);
 * let ans: Option<Rc<RefCell<TreeNode>>> = obj.deserialize(data);
 */
```