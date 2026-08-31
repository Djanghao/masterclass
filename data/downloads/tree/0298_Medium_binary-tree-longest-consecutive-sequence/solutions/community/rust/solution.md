# Rust DFS

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2511478/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2511478/)

---

~~~
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn longest_consecutive(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut ret = 0;
        Self::evaluate(&root, i32::MIN, 0, &mut ret);
        ret
    }
    
    fn evaluate(root: &Option<Rc<RefCell<TreeNode>>>, val: i32, cnt: i32, ret: &mut i32) {
        let node = root.as_ref().unwrap().borrow();
        let cnt = if node.val == val + 1 { cnt + 1 } else { 1 };
        
        *ret = cnt.max(*ret);
        if node.left.is_some() { Self::evaluate(&node.left, node.val, cnt, ret); }
        if node.right.is_some() { Self::evaluate(&node.right, node.val, cnt, ret); }
    }
}
~~~