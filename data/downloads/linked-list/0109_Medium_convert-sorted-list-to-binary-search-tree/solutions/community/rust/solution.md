# Rust recursive solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1194315/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1194315/)

---

```rust
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn sorted_list_to_bst(head: Option<Box<ListNode>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut len = 0;
        let mut node = &head;
        while let Some(n) = node {
            len += 1;
            node = &n.next;
        }
        let mut head = head;
        Self::helper(&mut head, len)
    }
    fn helper(list: &mut Option<Box<ListNode>>, len: usize) -> Option<Rc<RefCell<TreeNode>>> {
        if len == 0 {
            return None;
        }
        let left = Self::helper(list, len / 2);
        if let Some(head) = list {
            let mut node = TreeNode::new(head.val);
            *list = head.next.take();
            node.left = left;
            node.right = Self::helper(list, len - len / 2 - 1);
            Some(Rc::new(RefCell::new(node)))
        } else {
            None
        }
    }
}
```