# Rust | Iterative DFS | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2527790/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2527790/)

---

The algorithm: I iterate over the tree using DFS, keeping track of the x (left to right) and y (top to bottom) positions, and populate a hash map mapping from the x value to vectors node values annotated by their y value. I then collect the vectors,  and sort them according to the requirements (y ascending and value ascending).

Notes about the solution:
* `.entry(x).or_default()` is a wonderfully concise way of adding an empty element to a `HashMap` and get a mutable reference to it directly, instead of something like `match map.get_mut(&x) { ...`.
* I use `once` (construct a one-element iterator), `chain` (chain together iterators) and `extend` to make a very concise one-liner for adding children to the stack.
* For the sorting, I was very happy when I realised that I could sort the entries in place, instead of cloning them and then sorting.
* The elements of the hash map vector values are tuples (y, value). The sorting order of tuples is ascending starting from the first element, so we get the right sorting order with this ordering of the tuple.

```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::HashMap;
use std::iter::once;
impl Solution {
    pub fn vertical_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut stack = vec![(root, 0, 0)];
        let mut map = HashMap::<i32, Vec<(i32, i32)>>::new();
        let (mut min, mut max) = (0, 0);

        while let Some(tuple) = stack.pop() {
            if let (Some(node_rc), x, y) = tuple {
                min = min.min(x);
                max = max.max(x);
                let mut node_ref = node_rc.borrow_mut();
                map.entry(x).or_default().push((y, node_ref.val));
                stack.extend(once(node_ref.left.take()).map(|left| (left, x - 1, y + 1)).chain(once(node_ref.right.take()).map(|right| (right, x + 1, y + 1))));
            }
        }

        let mut rez = vec![vec![]; (max - min + 1) as usize];

        for i in min..=max {
            let mut row = map.get_mut(&i).unwrap();
            row.sort_unstable();
            rez[(i - min) as usize] = row.iter().map(|(_, val)| *val).collect();
        }
        
        rez
    }
}
```