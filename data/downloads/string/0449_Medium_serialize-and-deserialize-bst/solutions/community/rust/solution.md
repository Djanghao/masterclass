# [Rust] simple solution

**Author:** talalshafei
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/6136321/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/6136321/)

---

same idea as @[leetcodeftw](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/93171/python-o-n-solution-easy-to-understand)

# Code
```rust []
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;
type Tree = Option<Rc<RefCell<TreeNode>>>;
struct Codec {}

impl Codec {
    fn new() -> Self {
        Self {}
    }

    fn serialize(&self, root: Tree) -> String {
        let mut vals = Vec::new();
        preorder(&mut vals, root);
        vals.into_iter().map(|val| val.to_string()).collect::<Vec<_>>().join(" ")
    }
	
    fn deserialize(&self, data: String) -> Tree {
        let mut vals = data
            .split_whitespace()
            .map(|s| s.parse::<i32>().unwrap())
            .collect::<VecDeque<i32>>();

        build(&mut vals, i32::MIN, i32::MAX)
    }
}

fn preorder(vals: &mut Vec<i32>, node: Tree){
    if let Some(node_rc) = node {
        let node = node_rc.borrow();
        vals.push(node.val);
        preorder(vals, node.left.clone());
        preorder(vals, node.right.clone());
    }
}

fn build(vals: &mut VecDeque<i32>, min_val: i32, max_val:i32) -> Tree {
    if vals.is_empty() { return None; }
    let v = vals[0];
    if v <= min_val || v >= max_val { return None; }
    vals.pop_front();

    let mut node = TreeNode::new(v);
    node.left = build(vals, min_val, v);
    node.right = build(vals, v, max_val);

    Some(Rc::new(RefCell::new(node)))
}
```