# ✅ Explained step by step | Beats 100% | ✅ Working 23.10.2024

**Author:** Piotr_Maminski
**Votes:** 14
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5955377/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5955377/)

---

```python3 []
class Solution:
    def replaceValueInTree(self, root):
        # List to store the sum of node values at each depth
        self.depth_sum = []

        # First DFS to calculate the sum of node values at each depth
        def dfs1(node, d):
            if not node:
                return  # Base case: if the node is null, return

            # If the current depth is greater than or equal to the list size,
            # add a new element with the current node's value
            if d >= len(self.depth_sum):
                self.depth_sum.append(node.val)
            # Otherwise, add the current node's value to the existing sum at this depth
            else:
                self.depth_sum[d] += node.val

            # Recursively call dfs1 for left and right children, incrementing the depth
            dfs1(node.left, d + 1)
            dfs1(node.right, d + 1)

        # Second DFS to replace node values
        def dfs2(node, val, d):
            if not node:
                return  # Base case: if the node is null, return

            # Replace the current node's value with the passed 'val'
            node.val = val

            # Calculate the sum of cousin nodes' values
            # If there's a next depth, get its sum, otherwise use 0
            c = self.depth_sum[d + 1] if d + 1 < len(self.depth_sum) else 0
            # Subtract the values of the current node's children (if they exist)
            c -= (node.left.val if node.left else 0)
            c -= (node.right.val if node.right else 0)

            # Recursively call dfs2 for left and right children
            # Pass the calculated cousin sum 'c' and increment the depth
            if node.left:
                dfs2(node.left, c, d + 1)
            if node.right:
                dfs2(node.right, c, d + 1)

        # First DFS to calculate depth sums
        dfs1(root, 0)
        # Second DFS to replace values, starting with 0 for the root
        dfs2(root, 0, 0)
        # Return the modified root
        return root
```
```cpp []
class Solution {
public:
    // Vector to store the sum of node values at each depth
    vector<int> depthSum;

    // First DFS to calculate the sum of node values at each depth
    void dfs1(TreeNode* root, int d) {
        if (!root) return;  // Base case: if the node is null, return

        // If the current depth is greater than or equal to the vector size,
        // add a new element with the current node's value
        if (d >= depthSum.size()) depthSum.push_back(root->val);
        // Otherwise, add the current node's value to the existing sum at this depth
        else depthSum[d] += root->val;

        // Recursively call dfs1 for left and right children, incrementing the depth
        dfs1(root->left, d + 1);
        dfs1(root->right, d + 1);
    }

    // Second DFS to replace node values
    void dfs2(TreeNode* root, int val, int d) {
        if (!root) return;  // Base case: if the node is null, return

        // Replace the current node's value with the passed 'val'
        root->val = val;

        // Calculate the sum of cousin nodes' values
        // If there's a next depth, get its sum, otherwise use 0
        int c = d + 1 < depthSum.size() ? depthSum[d + 1] : 0;
        // Subtract the values of the current node's children (if they exist)
        c -= (root->left != nullptr ? root->left->val : 0);
        c -= (root->right != nullptr ? root->right->val : 0);

        // Recursively call dfs2 for left and right children
        // Pass the calculated cousin sum 'c' and increment the depth
        if (root->left) dfs2(root->left, c, d + 1);
        if (root->right) dfs2(root->right, c, d + 1);
    }

    // Main function to replace values in the tree
    TreeNode* replaceValueInTree(TreeNode* root) {
        // First DFS to calculate depth sums
        dfs1(root, 0);
        // Second DFS to replace values, starting with 0 for the root
        dfs2(root, 0, 0);
        // Return the modified root
        return root;
    }
};
```
```java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    // List to store the sum of node values at each depth
    private List<Integer> depthSum;

    public TreeNode replaceValueInTree(TreeNode root) {
        depthSum = new ArrayList<>();
        // First DFS to calculate depth sums
        dfs1(root, 0);
        // Second DFS to replace values, starting with 0 for the root
        dfs2(root, 0, 0);
        // Return the modified root
        return root;
    }

    // First DFS to calculate the sum of node values at each depth
    private void dfs1(TreeNode root, int d) {
        if (root == null) return;  // Base case: if the node is null, return

        // If the current depth is greater than or equal to the list size,
        // add a new element with the current node's value
        if (d >= depthSum.size()) {
            depthSum.add(root.val);
        }
        // Otherwise, add the current node's value to the existing sum at this depth
        else {
            depthSum.set(d, depthSum.get(d) + root.val);
        }

        // Recursively call dfs1 for left and right children, incrementing the depth
        dfs1(root.left, d + 1);
        dfs1(root.right, d + 1);
    }

    // Second DFS to replace node values
    private void dfs2(TreeNode root, int val, int d) {
        if (root == null) return;  // Base case: if the node is null, return

        // Replace the current node's value with the passed 'val'
        root.val = val;

        // Calculate the sum of cousin nodes' values
        // If there's a next depth, get its sum, otherwise use 0
        int c = d + 1 < depthSum.size() ? depthSum.get(d + 1) : 0;
        // Subtract the values of the current node's children (if they exist)
        c -= (root.left != null ? root.left.val : 0);
        c -= (root.right != null ? root.right.val : 0);

        // Recursively call dfs2 for left and right children
        // Pass the calculated cousin sum 'c' and increment the depth
        if (root.left != null) dfs2(root.left, c, d + 1);
        if (root.right != null) dfs2(root.right, c, d + 1);
    }
}
```
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    // List to store the sum of node values at each depth
    private List<int> depthSum;

    public TreeNode ReplaceValueInTree(TreeNode root) {
        depthSum = new List<int>();
        // First DFS to calculate depth sums
        Dfs1(root, 0);
        // Second DFS to replace values, starting with 0 for the root
        Dfs2(root, 0, 0);
        // Return the modified root
        return root;
    }

    // First DFS to calculate the sum of node values at each depth
    private void Dfs1(TreeNode root, int d) {
        if (root == null) return;  // Base case: if the node is null, return

        // If the current depth is greater than or equal to the list size,
        // add a new element with the current node's value
        if (d >= depthSum.Count) {
            depthSum.Add(root.val);
        }
        // Otherwise, add the current node's value to the existing sum at this depth
        else {
            depthSum[d] += root.val;
        }

        // Recursively call Dfs1 for left and right children, incrementing the depth
        Dfs1(root.left, d + 1);
        Dfs1(root.right, d + 1);
    }

    // Second DFS to replace node values
    private void Dfs2(TreeNode root, int val, int d) {
        if (root == null) return;  // Base case: if the node is null, return

        // Replace the current node's value with the passed 'val'
        root.val = val;

        // Calculate the sum of cousin nodes' values
        // If there's a next depth, get its sum, otherwise use 0
        int c = d + 1 < depthSum.Count ? depthSum[d + 1] : 0;
        // Subtract the values of the current node's children (if they exist)
        c -= (root.left != null ? root.left.val : 0);
        c -= (root.right != null ? root.right.val : 0);

        // Recursively call Dfs2 for left and right children
        // Pass the calculated cousin sum 'c' and increment the depth
        if (root.left != null) Dfs2(root.left, c, d + 1);
        if (root.right != null) Dfs2(root.right, c, d + 1);
    }
}
```
```swift []
class Solution {
    // Array to store the sum of node values at each depth
    var depthSum: [Int] = []

    // First DFS to calculate the sum of node values at each depth
    func dfs1(_ root: TreeNode?, _ d: Int) {
        guard let root = root else { return }  // Base case: if the node is null, return

        // If the current depth is greater than or equal to the array size,
        // add a new element with the current node's value
        if d >= depthSum.count {
            depthSum.append(root.val)
        }
        // Otherwise, add the current node's value to the existing sum at this depth
        else {
            depthSum[d] += root.val
        }

        // Recursively call dfs1 for left and right children, incrementing the depth
        dfs1(root.left, d + 1)
        dfs1(root.right, d + 1)
    }

    // Second DFS to replace node values
    func dfs2(_ root: TreeNode?, _ val: Int, _ d: Int) {
        guard let root = root else { return }  // Base case: if the node is null, return

        // Replace the current node's value with the passed 'val'
        root.val = val

        // Calculate the sum of cousin nodes' values
        // If there's a next depth, get its sum, otherwise use 0
        var c = d + 1 < depthSum.count ? depthSum[d + 1] : 0
        // Subtract the values of the current node's children (if they exist)
        c -= root.left?.val ?? 0
        c -= root.right?.val ?? 0

        // Recursively call dfs2 for left and right children
        // Pass the calculated cousin sum 'c' and increment the depth
        if let left = root.left {
            dfs2(left, c, d + 1)
        }
        if let right = root.right {
            dfs2(right, c, d + 1)
        }
    }

    // Main function to replace values in the tree
    func replaceValueInTree(_ root: TreeNode?) -> TreeNode? {
        // First DFS to calculate depth sums
        dfs1(root, 0)
        // Second DFS to replace values, starting with 0 for the root
        dfs2(root, 0, 0)
        // Return the modified root
        return root
    }
}
```
```golang []
package main

// Using the pre-defined TreeNode struct
// type TreeNode struct {
//     Val int
//     Left *TreeNode
//     Right *TreeNode
// }

// depthSum is now a package-level variable
var depthSum []int

// dfs1 performs the first DFS to calculate the sum of node values at each depth
func dfs1(root *TreeNode, d int) {
    if root == nil {
        return // Base case: if the node is null, return
    }

    // If the current depth is greater than or equal to the slice length,
    // add a new element with the current node's value
    if d >= len(depthSum) {
        depthSum = append(depthSum, root.Val)
    } else {
        // Otherwise, add the current node's value to the existing sum at this depth
        depthSum[d] += root.Val
    }

    // Recursively call dfs1 for left and right children, incrementing the depth
    dfs1(root.Left, d+1)
    dfs1(root.Right, d+1)
}

// dfs2 performs the second DFS to replace node values
func dfs2(root *TreeNode, val int, d int) {
    if root == nil {
        return // Base case: if the node is null, return
    }

    // Replace the current node's value with the passed 'val'
    root.Val = val

    // Calculate the sum of cousin nodes' values
    // If there's a next depth, get its sum, otherwise use 0
    c := 0
    if d+1 < len(depthSum) {
        c = depthSum[d+1]
    }
    // Subtract the values of the current node's children (if they exist)
    if root.Left != nil {
        c -= root.Left.Val
    }
    if root.Right != nil {
        c -= root.Right.Val
    }

    // Recursively call dfs2 for left and right children
    // Pass the calculated cousin sum 'c' and increment the depth
    if root.Left != nil {
        dfs2(root.Left, c, d+1)
    }
    if root.Right != nil {
        dfs2(root.Right, c, d+1)
    }
}

// replaceValueInTree is the main function to replace values in the tree
func replaceValueInTree(root *TreeNode) *TreeNode {
    depthSum = []int{} // Initialize depthSum slice
    // First DFS to calculate depth sums
    dfs1(root, 0)
    // Second DFS to replace values, starting with 0 for the root
    dfs2(root, 0, 0)
    // Return the modified root
    return root
}
```
```javascript [JS]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    let depthSum = [];

    // First DFS to calculate the sum of node values at each depth
    function dfs1(node, depth) {
        if (!node) return;

        if (depth >= depthSum.length) {
            depthSum.push(node.val);
        } else {
            depthSum[depth] += node.val;
        }

        dfs1(node.left, depth + 1);
        dfs1(node.right, depth + 1);
    }

    // Second DFS to replace node values
    function dfs2(node, val, depth) {
        if (!node) return;

        node.val = val;

        let cousinSum = depth + 1 < depthSum.length ? depthSum[depth + 1] : 0;
        cousinSum -= (node.left ? node.left.val : 0);
        cousinSum -= (node.right ? node.right.val : 0);

        if (node.left) dfs2(node.left, cousinSum, depth + 1);
        if (node.right) dfs2(node.right, cousinSum, depth + 1);
    }

    // Execute the two DFS passes
    dfs1(root, 0);
    dfs2(root, 0, 0);

    return root;
};
```
```typescript [TS]
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    const depthSum: number[] = [];

    // First DFS to calculate the sum of node values at each depth
    function dfs1(node: TreeNode | null, depth: number): void {
        if (!node) return;

        if (depth >= depthSum.length) {
            depthSum.push(node.val);
        } else {
            depthSum[depth] += node.val;
        }

        dfs1(node.left, depth + 1);
        dfs1(node.right, depth + 1);
    }

    // Second DFS to replace node values
    function dfs2(node: TreeNode | null, val: number, depth: number): void {
        if (!node) return;

        node.val = val;

        let cousinSum = depth + 1 < depthSum.length ? depthSum[depth + 1] : 0;
        cousinSum -= (node.left?.val ?? 0);
        cousinSum -= (node.right?.val ?? 0);

        if (node.left) dfs2(node.left, cousinSum, depth + 1);
        if (node.right) dfs2(node.right, cousinSum, depth + 1);
    }

    // Execute the two DFS passes
    dfs1(root, 0);
    dfs2(root, 0, 0);

    return root;
}
```
```php []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {
    private $depthSum = [];

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function replaceValueInTree($root) {
        $this->dfs1($root, 0);
        $this->dfs2($root, 0, 0);
        return $root;
    }

    /**
     * First DFS to calculate the sum of node values at each depth
     * @param TreeNode|null $node
     * @param int $depth
     */
    private function dfs1($node, $depth) {
        if ($node === null) return;

        if ($depth >= count($this->depthSum)) {
            $this->depthSum[$depth] = $node->val;
        } else {
            $this->depthSum[$depth] += $node->val;
        }

        $this->dfs1($node->left, $depth + 1);
        $this->dfs1($node->right, $depth + 1);
    }

    /**
     * Second DFS to replace node values
     * @param TreeNode|null $node
     * @param int $val
     * @param int $depth
     */
    private function dfs2($node, $val, $depth) {
        if ($node === null) return;

        $node->val = $val;

        $cousinSum = $depth + 1 < count($this->depthSum) ? $this->depthSum[$depth + 1] : 0;
        $cousinSum -= $node->left ? $node->left->val : 0;
        $cousinSum -= $node->right ? $node->right->val : 0;

        if ($node->left) $this->dfs2($node->left, $cousinSum, $depth + 1);
        if ($node->right) $this->dfs2($node->right, $cousinSum, $depth + 1);
    }
}
```
```rust []
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn replace_value_in_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        // Unwrap the root node or return None if it's empty
        let root = if let Some(root) = root { root } else { return None };
        
        // Initialize the sum of values at the current level
        let mut level_sum = 0;
        
        // Initialize the queue with the root node and its sibling sum (0 for root)
        // Each queue item is a tuple: (node, sibling_sum)
        let mut queue = vec![(root.clone(), 0)];
        
        while !queue.is_empty() {
            // Prepare a new queue for the next level
            let mut new_queue = vec![];
            // Initialize the sum for the next level
            let mut new_level_sum = 0;
            
            // Process all nodes at the current level
            for (node, sibling_sum) in queue.into_iter() {
                // Replace the node's value with the difference between level sum and sibling sum
                node.borrow_mut().val = level_sum - sibling_sum;
                
                // Calculate the sum of values for the current node's children
                let mut sibling_sum = 0;
                let mut non_leaf_children = vec![];
                
                // Process left child if it exists
                if let Some(child) = node.borrow().left.clone() {
                    sibling_sum += child.borrow().val;
                    non_leaf_children.push(child);
                }
                
                // Process right child if it exists
                if let Some(child) = node.borrow().right.clone() {
                    sibling_sum += child.borrow().val;
                    non_leaf_children.push(child);
                }
                
                // Add the sibling sum to the next level's sum
                new_level_sum += sibling_sum;
                
                // Add non-leaf children to the new queue with their sibling sum
                non_leaf_children.into_iter()
                    .for_each(|node| new_queue.push((node, sibling_sum)));
            }

            // Update the queue for the next iteration
            queue = new_queue;
            // Update the level sum for the next iteration
            level_sum = new_level_sum;
        }

        // Return the modified root node
        Some(root)
    }
}
```
![image.png](./images/0.png)

### Complexity 
- Time complexity: O(n)

- Space complexity: O(n)

## Explain step by step


---


1. Initialization:

- self.depth_sum: A list to store the sum of node values at each depth level of the tree.

2. First DFS (dfs1):

- Purpose: Calculate the sum of node values at each depth level.

- . Recursive Traversal:

    - If the current node is None, return immediately (base case).

    - If the current depth d is greater than or equal to the size of self.depth_sum, append the node's value to self.depth_sum.

    - Otherwise, add the node's value to the existing sum at this depth in self.depth_sum.

    - Recursively call dfs1 for the left and right children, incrementing the depth by 1.

3. Second DFS (dfs2):

- Purpose: Replace each node\u2019s value with a calculated value based on cousin nodes.

- Recursive Traversal:

    - If the current node is None, return immediately (base case).

    - Replace the current node\u2019s value with the passed val.

    - Calculate the sum of the cousin nodes\u2019 values for the next depth:

        - If there\u2019s a next depth in self.depth_sum, get its sum, otherwise use 0.

        - Subtract the values of the current node\u2019s children if they exist.

    - Recursively call dfs2 for the left and right children, passing the calculated cousin sum c and incrementing the depth by 1.

4. Execution:

- First DFS Call: dfs1(root, 0) to calculate depth sums.

- Second DFS Call: dfs2(root, 0, 0) to replace node values, starting with 0 for the root.

5. Return Result:

- Return the modified root after the second DFS completes.

---

![image.png](./images/1.png)
![image.png](./images/2.png)

