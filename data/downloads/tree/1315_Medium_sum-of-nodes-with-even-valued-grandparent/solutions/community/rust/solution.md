# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5638797/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5638797/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        res = 0
        def dfs(root, parent, grandparent):
            nonlocal res
            if not root: return 
            if grandparent and (grandparent.val & 1) is 0: res += root.val
            dfs(root.left, root, parent)
            dfs(root.right, root, parent)
        dfs(root, None, None)
        return res 
```
``` java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
final class Solution {
    private int sum = 0;
    public int sumEvenGrandparent(final TreeNode root) {
        dfs(root, null, null);
        return sum;
    }

    private void dfs(final TreeNode root, final TreeNode parent, final TreeNode grandparent){
        if (root == null) return;
        if (grandparent != null && (grandparent.val & 1) == 0) this.sum += root.val;
        dfs(root.left, root, parent);
        dfs(root.right, root, parent);
    }
}
```
``` rust []
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
use std::{rc::Rc, cell::RefCell};
type T = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn sum_even_grandparent(root: T) -> i32 {
        let mut res = 0;
        fn dfs(root: T, parent: T, grandparent: T, res: &mut i32){
            if let None = root {return;}
            if grandparent.is_some() && (grandparent.as_ref().unwrap().borrow().val & 1) == 0 { *res += root.as_ref().unwrap().borrow().val; }
            dfs(root.as_ref().unwrap().borrow().left.clone(), root.clone(), parent.clone(), res);
            dfs(root.as_ref().unwrap().borrow().right.clone(), root.clone(), parent.clone(), res);
        }
        dfs(root, None, None, &mut res);
        res
    }
}
```