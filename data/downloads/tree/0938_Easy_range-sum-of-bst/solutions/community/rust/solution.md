# Rust  TreeNode implementation could be simplified

**Author:** zxcq544
**Votes:** 5
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/1011277/](https://leetcode.com/problems/range-sum-of-bst/solutions/1011277/)

---

Current TreeNode in rust looks like that 
```
pub struct TreeNode {
   pub val: i32,
   pub left: Option<Rc<RefCell<TreeNode>>>,
   pub right: Option<Rc<RefCell<TreeNode>>>,
 }
 ```
 But since each node in tree has only one owner it could be simplified to 
 ```
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Box<TreeNode>>,
    pub right: Option<Box<TreeNode>>,
}
```
How does it help ?
1. It will work faster since we don't do reference counting. So compared to current 12-20 ms we will get  better results for rust.
2. Code to build tree becomes simpler.
