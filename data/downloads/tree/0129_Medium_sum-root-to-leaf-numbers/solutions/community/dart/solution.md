# Dart Easy Solution with BFS Approach

**Author:** imsisojib
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5025998/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5025998/)

---

# Intuition
Firstly I thought of treversing the tree so that I could find all the childs of the tree. Then I found out Level Order Treversing of BFS that helps to lists down the childs by level of position.

# Approach
## Level Order Treversal or BFS
For each node, first, the node is visited and then it\u2019s child nodes are put in a FIFO queue. Then again the first node is popped out and then it\u2019s child nodes are put in a FIFO queue and repeat until queue becomes empty.

## manipulation
while adding child nodes into Queue, updated the value according to the parent value multiplying by 10 and adding the current value.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */

 import 'dart:collection';


class Solution {
  int sumNumbers(TreeNode? root) {
    int sum = 0;
    Queue<TreeNode> queue = Queue();
    if(root!=null) queue.add(root);
    while(queue.isNotEmpty){
      TreeNode popped = queue.removeFirst();
      if(popped.left!=null) {
        popped.left!.val = (popped.val*10) + popped.left!.val;
        queue.add(popped.left!);
      };
      if(popped.right!=null) {
        popped.right!.val = (popped.val*10) + popped.right!.val;
        queue.add(popped.right!);
      }

      if(popped.left==null && popped.right==null){
        sum += popped.val;
      }

    }
    
    return sum;
  }
}
```