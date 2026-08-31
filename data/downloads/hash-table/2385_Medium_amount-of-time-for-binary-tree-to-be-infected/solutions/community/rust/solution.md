# [RUST] DFS Post-order traversal

**Author:** keep_of_kalessin
**Votes:** 3
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/2460956/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/2460956/)

---


```rust
pub fn amount_of_time(root: Option<Rc<RefCell<TreeNode>>>, start: i32) -> i32 {
    let mut answer = 0;
    if let Some(root) = root.as_ref() {
        postorder(root, start, &mut answer);
    }
    answer
}

fn postorder(root: &Rc<RefCell<TreeNode>>, target: i32, answer: &mut i32) -> (i32, bool) {
    let root = root.borrow();

    // Depth of left/right sub-tree. A valu eof `-1` means 
    // that there is no such sub-tree
    let mut ldepth = -1;
    let mut rdepth = -1;

    // A flag indicating whether the left/right sub-tree 
    // contains the infected node
    let mut linf = false;
    let mut rinf = false;

    // Measure the maximum depth of the left sub-tree from 
    // this node. And check if it contains the infected node
    if let Some(node) = root.left.as_ref() {
        let (d, i) = postorder(node, target, answer);
        ldepth = d;
        linf = i;
    }

    // Measure the maximum depth of the right sub-tree from 
    // this node. And check if it contains the infected node
    if let Some(node) = root.right.as_ref() {
        let (d, i) = postorder(node, target, answer);
        rdepth = d;
        rinf = i;
    }

    // If the left or right sub-tree is infected, then the 
    // time (i.e. the path the infection takes) is through
    // the subtree-link through this node, then through the 
    // other subtree. I.e. the path length is the sum of the 
    // depth of both subtrees, plus the two link to the 
    // current node (the two `+1` below)
    if linf || rinf {
        // Calculate the length of the infection path and
        // update the maximum distance (i.e. the answer)
        let depth = ldepth + 1 + rdepth + 1;
        *answer = (*answer).max(depth);

        // If one of the sub-trees is infected, we propagate 
        // only it's length
        return if linf {
            (ldepth + 1, true)
        } else {
            (rdepth + 1, true)
        };
    }

    // If none of the sub-trees are infected, then we are
    // interested of the maximum of both depths, because 
    // the infection would spread **simultaneously** to 
    // both subtrees when it reaches this node
    let depth = 1 + ldepth.max(rdepth);

    // If this three is the source of the infection
    // update the answer with the time it would take 
    // to infect it's sub-trees
    if root.val == target {
        *answer = (*answer).max(depth);

        // And we return 0 as it's depth, because we are
        // updating the answer in a post-order way, and
        // we are interested in the distance of the other 
        // nodes from this node
        return (0, true);
    }

    // None of the sub-trees is infected, and this node 
    // is healthy as well.A e are interested of the 
    // maximum of both depths, because the infection 
    // would spread **simultaneously** to  both subtrees 
    // when it reaches this node
    (depth, false)
}
```
