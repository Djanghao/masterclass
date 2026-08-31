# Rust | Efficient | With Comments

**Author:** wallicent
**Votes:** 10
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2406370/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2406370/)

---

Looking at other (some top-voted) Rust solutions here, it seems necessary to say a few words about efficiency. Using `to_vec()` to create new vectors in order to satisfy the given function signature is wasteful, so we should delegate the recursion to a helper function that has a more efficient signature. But we should not take a `&Vec<i32>` in that signature, since this needs an additional pointer lookup compared to `&[i32]`. This is BTW one of the optimizations that `cargo clippy` would suggest if we would try to use the former argument type.

Also, it's quite unnecessary to first construct an empty node in an `Rc`, and then borrowing it to add the children. I instead construct the node, including the children, as an owned variable, and then move it into the wrapping `RefCell` etc in a single expression.

More a matter of style maybe, but I also prefer avoiding manual indexing when I can, and rather lean back on functions like `split_at(...)`. Less reinvention of the wheel, less error prone.

```
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    fn recurse(nums: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
        if nums.is_empty() {
            None
        } else {
            let (left, rest) = nums.split_at(nums.len() / 2);
            let (curr, right) = rest.split_first().unwrap();
            Some(Rc::new(RefCell::new(TreeNode {
                val: *curr,
                left: Self::recurse(left),
                right: Self::recurse(right),
            })))
        }
    }

    pub fn sorted_array_to_bst(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        Self::recurse(&nums)
    }
}
```