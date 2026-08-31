# ✅ [Rust] 0 ms, iterative BFS solution + bonus (with detailed comments)

**Author:** iablokov
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/2680276/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/2680276/)

---

This [**solution**](https://leetcode.com/submissions/detail/818485491/) employs an iterative approach to perform BFS and a *HashSet* to store already seen values. It demonstrated **0 ms runtime (100.00%)** and used **3.1 MB memory (85.71%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(N)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::collections::{HashSet,VecDeque};
use std::rc::Rc;
use std::cell::RefCell;

type Node = Option<Rc<RefCell<TreeNode>>>;

impl Solution 
{
    pub fn find_target(root: Node, k: i32) -> bool 
    {
        // [1] we store already seen values in a HashSet
        let mut seen : HashSet<i32> = HashSet::new();
        
        // [2] VecDeque allows to perform BFS (a level-by-level traversal)
        let mut queue : VecDeque<Node> = VecDeque::new();
        queue.push_back(root);

        // [3] simply pop from its front and push to its back...
        while let Some(node) = queue.pop_front()
        {
            if let Some(node) = node
            {
                // [4] check sum condition
                if seen.contains(&(k - node.borrow().val)) { return true; }
                
                seen.insert(node.borrow().val);

                let mut node_borrow = node.borrow_mut();
                queue.push_back(node_borrow.left.take());
                queue.push_back(node_borrow.right.take());
            }
        }

        return false;
    }
}
```
As a bonus, I provide a somewhat slower (probably due to stack calls) recursive DFS [**solution**](https://leetcode.com/submissions/detail/818471355/).
```
use std::collections::HashSet;
use std::rc::Rc;
use std::cell::RefCell;

type Node = Option<Rc<RefCell<TreeNode>>>;

impl Solution 
{
    pub fn find_target(root: Node, k: i32) -> bool 
    {
        // [1] we store already seen values in a HashSet
        let mut seen: HashSet<i32> = HashSet::new();

        // [2] this helper function performs recursive DFS
        fn helper(node: &Node, k: i32, seen: &mut HashSet<i32>) -> bool
        {
            if let Some(node) = node
            {
                // [3] check sum condition
                if seen.contains(&(k - node.borrow().val)) { return true; }
                
                seen.insert(node.borrow().val);
    
                return helper(&node.borrow().left,  k, seen) || 
                       helper(&node.borrow().right, k, seen);
    
            } else { return false; }
        }

        helper(&root, k, &mut seen)
    }
}
```