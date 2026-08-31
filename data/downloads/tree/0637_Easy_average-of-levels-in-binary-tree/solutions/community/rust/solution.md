# Rust | Two Solutions | With Comments

**Author:** wallicent
**Votes:** 8
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2517749/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2517749/)

---

The algorithm - BFS is what comes to mind first, since you automatically get the level order traversal. Any other type of traversal is possible if you annotate the nodes with the appropriate level. I did two solutions to practice the two techniques.

Some notes about my implementation:

* As I usually comment in Rust tree traversal problems on LeetCode, there is no need to `clone` nodes and incur the unnecessary cost of reference count incrementation/decrementation. Instead, `take` the nodes and move them around.
* We are only interested in nodes that are `Some(...)`. In this context I prefer `q.extend(once(node_ref.left.take()).chain(once(node_ref.right.take())).flatten())` over the six lines of `if let Some(child) = node_ref.left.take() { ...` for adding the children of a node to the queue, although I must admit that the latter has the benefit of being more explicit. For the one-liner, `once` creates an iterator with one element, `chain` chains iterators together, `flatten` filters out any `None` values and unpacks the `Some(...)` values, and `extend` extends the container with the elements of the iterator. Sweet. :)

First the BFS solution:

```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;
use std::iter::once;
impl Solution {
    pub fn average_of_levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<f64> {
        let mut q: VecDeque<_> = once(root).flatten().collect();
        let mut rez = vec![];
        while !q.is_empty() {
            let (mut sum, n) = (0.0, q.len());
            for _ in 0..n {
                let node_rc = q.pop_front().unwrap();
                let mut node_ref = node_rc.borrow_mut();
                sum += node_ref.val as f64;
                q.extend(once(node_ref.left.take()).chain(once(node_ref.right.take())).flatten());
            }
            rez.push(sum / (n as f64));
        }
        rez
    }
}
```

And now for the solution where I annotate nodes with the level. I collect the sums and counts of node values at each level in `sums`, and use `map` to transform that into to the `Vec` of averages.

```
use std::rc::Rc;
use std::cell::RefCell;
use std::iter::once;
impl Solution {
    pub fn average_of_levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<f64> {
        let mut stack: Vec<_> = vec![(root.unwrap(), 0)];
        let mut sums = vec![];
        while let Some((node_rc, level)) = stack.pop() {
            if level == sums.len() { sums.push((0.0, 0)) }
            let mut node_ref = node_rc.borrow_mut();
            sums[level] = (sums[level].0 + node_ref.val as f64, sums[level].1 + 1);
            stack.extend(once(node_ref.left.take()).chain(once(node_ref.right.take())).flatten().map(|n| (n, level + 1)));
        }
        sums.into_iter().map(|(sum, n)| sum / n as f64).collect()
    }
}
```