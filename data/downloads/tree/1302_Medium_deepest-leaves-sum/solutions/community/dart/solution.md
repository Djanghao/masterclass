# dart solution

**Author:** Devanandhhh
**Votes:** 0
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/5451646/](https://leetcode.com/problems/deepest-leaves-sum/solutions/5451646/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
  int deepestLeavesSum(TreeNode? root) {
    if(root==null){
        return 0;
    }
    final queue= Queue<TreeNode>();
    queue.add(root);
    int sum =0;

    while(queue.isNotEmpty){
        int qlength =queue.length;
        sum =0;
        
        for(int i=0;i<qlength;i++){
            final node =queue.removeFirst();
            sum=sum+node.val;
            
            if(node.left!=null)queue.add(node.left!);
            if(node.right!=null)queue.add(node.right!);
        }
    }
    return sum;
  }
}

```