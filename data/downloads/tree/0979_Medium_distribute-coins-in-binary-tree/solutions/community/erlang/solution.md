# Rust, Erlang Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172598/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172598/)

---

### Rust

```rust
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn distribute_coins(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        Self::distribute_coins_impl(&root).0
    }
    
    fn distribute_coins_impl(root: &Option<Rc<RefCell<TreeNode>>>) -> (i32, i32, i32) {
        match root {
            None => (0, 0, 0),
            Some(noderc) => {
                let node = noderc.borrow();
                let (leftm, leftc, leftn) = Self::distribute_coins_impl(&node.left);
                let (rightm, rightc, rightn) = Self::distribute_coins_impl(&node.right);

                let coins = leftc + rightc + node.val;
                let nodes = leftn + rightn + 1;
                let moves = leftm + rightm + (nodes - coins).abs();
                (moves, coins, nodes)
            }
        }
    }
}
```

---

### Erlang

```erlang
-spec distribute_coins(Root :: #tree_node{} | null) -> integer().
distribute_coins(Root) ->
    element(1, distribute_coins_impl(Root)).

distribute_coins_impl(#tree_node{val = Val, left = Left, right = Right}) ->
    {LeftMoves, LeftCoins, LeftNodes} = distribute_coins_impl(Left),
    {RightMoves, RightCoins, RightNodes} = distribute_coins_impl(Right),
    Coins = LeftCoins + RightCoins + Val,
    Nodes = LeftNodes + RightNodes + 1,
    Moves = abs(Nodes - Coins) + LeftMoves + RightMoves,
    {Moves, Coins, Nodes};
distribute_coins_impl(null) ->
    {0, 0, 0}.
```