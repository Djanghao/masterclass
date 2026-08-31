# Rust | Iterative DFS | With Comments

**Author:** wallicent
**Votes:** 5
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2574162/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2574162/)

---

I'm sure the official solution does a better job of explaining the algorithm, but anyway - iterate over the tree, keeping track of the frequencies of the node values as we go. If we hit a leaf, we check if the frequencies contain at most one odd value, since we can form a palindrome with even pairs or all even except one odd in the middle of the palindrome.

I really wanted to do an iterative implementation out of this. So I keep track of whether the frequencies are odd or even using a bit array (`odds`) as a part of the iteration state. When I encounter a leaf, I add to `rez`, the count of pseudo-palindromic paths, if `odds` has less than two bits set, as explained above.

Implementation notes:
* You are really free to chose BFS if you would prefer that, but I prefer DFS since it becomes a bit less verbose.
* I usually argue that we should use move semantics for tree iteration problems on LeetCode, since it is more efficient than cloning. Recently, a solution that I made where I used this reasoning was downvoted, and that made me think about that choice. As explained in the Rust Book, `RefCell` follows the inner mutability pattern, which relies on run-time borrow checking instead of compile-time checking. This means that when you hand a `RefCell` to a function, the function is free to mutate the underlying variable. When we use move semantics and `take` nodes, we are mutating the tree. One might argue that it is not good programming practice to mutate the input. I would lean towards the side that says that this is the same as if we would have been handed a `&mut`, i.e. we can mutate it, and therefore the caller should make no assumptions that we won't mutate it. If we were not allowed to mutate, it would be better to enforce this by handing us a tree of `Rc`s without `RefCell`s instead. Anyway, with this said, I went for a non-destructive solution today. :)
* Counting the number of bits is an operation that can be done in one instruction on modern x86 processors, so it's as efficient or more efficient, and clearer, than using manual bit twiddling.

```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn pseudo_palindromic_paths (root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut stack = vec![(root.unwrap(), 0u16)];
        let mut rez = 0;

        while let Some((node_rc, mut odds)) = stack.pop() {
            let node_ref = node_rc.borrow();
            odds ^= 1 << node_ref.val;
            match (node_ref.left.clone(), node_ref.right.clone()) {
                (None, None) => if odds.count_ones() < 2 { rez += 1 },
                (None, Some(right)) => stack.push((right, odds)),
                (Some(left), None) => stack.push((left, odds)),
                (Some(left), Some(right)) => { 
                    stack.push((left, odds)); stack.push((right, odds));
                },
            }
        }

        rez
    }
}
```