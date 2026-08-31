# Rust DFS Clean

**Author:** xiaoping3418
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/2369087/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/2369087/)

---

~~~
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn find_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut ret: Vec<Vec<i32>> = vec![];       
        Self::collect(&root, &mut ret);
        ret
    }
    
    fn collect(root: &Option<Rc<RefCell<TreeNode>>>, ret: &mut Vec<Vec<i32>>) -> usize {
        let mut level = 0;
        let node = root.as_ref().unwrap().borrow();
        
        if node.left.is_some() { level = level.max(Self::collect(&node.left, ret) + 1); }
        if node.right.is_some() { level = level.max(Self::collect(&node.right, ret) + 1); }
        
        if ret.len() == level { ret.push(vec![]); }
        ret[level].push(node.val);
        
        level
    }
}
~~~