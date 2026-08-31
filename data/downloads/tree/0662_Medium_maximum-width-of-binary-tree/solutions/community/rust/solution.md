# Memory optimised O(n) in C++/Go/Rust

**Author:** vadimpiven
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/3437742/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/3437742/)

---

# Approach
Visit all nodes in BFS order and calculate width of each layer.
To optimize memory allocation use two vectors instead of one queue.
Shift indices for each layer as tree is very sparse.
In Golang there are strangely no tests where intermediate indices are not fitting in $int$, so index could be stored as node value.

# Complexity
- Time complexity:
$$O(n)$$ as all the nodes are visited

- Space complexity:
$$O(n)$$ as in case we have one or two layers we will entirely store them in intermediate containers

# Code in C++
```
class Solution {
public:
    int widthOfBinaryTree(TreeNode* root) {
        unsigned maxWidth = 0;
        std::vector<std::pair<TreeNode*, unsigned>> currLevel, nextLevel;
        currLevel.emplace_back(root, 0);
        while (!currLevel.empty()) {
            maxWidth = std::max(maxWidth, currLevel.back().second - currLevel.front().second + 1);
            for (const auto [node, index] : currLevel) {
                if (node->left != nullptr) {
                    nextLevel.emplace_back(node->left, (index - currLevel.front().second) * 2);
                }
                if (node->right != nullptr) {
                    nextLevel.emplace_back(node->right, (index - currLevel.front().second) * 2 + 1);
                }
            }
            std::swap(currLevel, nextLevel), nextLevel.clear();
        }
        return static_cast<int>(maxWidth);
    }
};
```

# Code in Go
```
func widthOfBinaryTree(root *TreeNode) int {
    root.Val = 0
    currLevel, nextLevel := []*TreeNode{ root }, []*TreeNode{}

    maxWidth := 0
    for len(currLevel) > 0 {
        width := currLevel[len(currLevel) - 1].Val - currLevel[0].Val + 1
        if width > maxWidth {
            maxWidth = width
        }

        for _, node := range currLevel {
            if node.Left != nil {
                node.Left.Val = (node.Val - currLevel[0].Val) * 2;
                nextLevel = append(nextLevel, node.Left)
            }
            if node.Right != nil {
                node.Right.Val = (node.Val - currLevel[0].Val) * 2 + 1;
                nextLevel = append(nextLevel, node.Right)
            }
        }

        currLevel, nextLevel = nextLevel, currLevel
        nextLevel = nextLevel[:0]
    }
    return maxWidth
}
```

# Code in Rust
```
use std::rc::Rc;
use std::cell::RefCell;
use std::vec::Vec;
impl Solution {
    pub fn width_of_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut maxWidth = 0u32;
        let (mut currLevel, mut nextLevel) = (Vec::new(), Vec::new());
        currLevel.push((root.unwrap(), 0u32));
        while !currLevel.is_empty() {
            maxWidth = maxWidth.max(currLevel[currLevel.len() - 1].1 - currLevel[0].1 + 1);
            for (node, index) in currLevel.iter() {
                if let Some(node) = node.borrow().left.clone() {
                    nextLevel.push((node, (index - currLevel[0].1) * 2));
                }
                if let Some(node) = node.borrow().right.clone() {
                    nextLevel.push((node, (index - currLevel[0].1) * 2 + 1));
                }
            }
            std::mem::swap(&mut currLevel, &mut nextLevel);
            nextLevel.clear();
        }
        maxWidth as i32
    }
}
```