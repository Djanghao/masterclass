# Faster than 100%, less space than 100% (4ms, 2.9MB)

**Author:** Hiruto
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3240513/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3240513/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The crux of this problem isn't about how to compare subtrees. If node1 == node2 returns "true", we know the subtrees are the same. The crux is how to carefully pick the best candidates for comparison.
Comparing every node to every other node will (obviously) result in a TLE.
We need to get some sort of "signature" of a node and only compare this to other nodes with the same signature.
A node's signature is determined by the number of nodes in its subtrees.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a HashMap. This should map the signature (or *key*) of a node to a list of all traversed nodes with the same signature.
2. Create a Vec. This should store all the duplicates that we encounter.
3. Create a recursive function. This function takes a node, and a mutable refence to the HashMap and the Vec respectively. This function returns an i32, representing the number of nodes in the subtree.
4. If a node is None, it simply returns 0 (as this can hardly be considered a subtree).
5. If a node isn't None, we get the number of nodes in the left subtree and the number of nodes in the right subtree. We use this data to create the node's signature (or *key*).
6. If our HashMap doesn't contain a list of nodes with this signature, we create one and add our node.
7. If our HashMap already contains a list of nodes with this signature, we compare our node to all stored nodes in the list.
8. If the node already exists - and it *hasn't* been added to the Vec of duplicates - we push it to our duplicates.
9. If the node doesn't already exist, we push it to the list.
10. Return the Vec of duplicates.

# Code
```
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::HashMap;

impl Solution {
    pub fn find_duplicate_subtrees(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        fn traverse(treenode: Option<Rc<RefCell<TreeNode>>>, map: &mut HashMap<(i32, i32), Vec<Option<Rc<RefCell<TreeNode>>>>>, duplicates: &mut Vec<Option<Rc<RefCell<TreeNode>>>>) -> i32 {
            match treenode.to_owned() {
                Some(node_ref) => {
                    let node = node_ref.borrow();
                    let left = traverse(node.left.to_owned(), map, duplicates);
                    let right = traverse(node.right.to_owned(), map, duplicates);
                    let key = (left, right);

                    map.entry(key).and_modify(|list| {
                        if list.contains(&treenode) && !duplicates.contains(&treenode) {
                            duplicates.push(treenode);
                        } else {
                            list.push(treenode);
                        }
                    }).or_insert(vec![Some(node_ref.to_owned())]);

                    return left + right + 1;
                },
                None => return 0
            }
        }

        let mut map: HashMap<(i32, i32), Vec<Option<Rc<RefCell<TreeNode>>>>> = HashMap::new();
        let mut duplicates: Vec<Option<Rc<RefCell<TreeNode>>>> = vec![];

        traverse(root, &mut map, &mut duplicates);

        duplicates
    }
}
```