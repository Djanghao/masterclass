# C# Recursion + BFS (1ms)

**Author:** gogol1anonly
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/6034481/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/6034481/)

---

# Intuition
traverse tree and try to find k. when you find, check the closest leaf dist from each opposite node of parent path (suppose if we came from m.right -> k, then check on m.left) upto the root.

At the end also check for leaf distances from k - Treenode's left, right.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```csharp []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    TreeNode matching;
    TreeNode closestLeaf;
    int minDistance;
    public int FindClosestLeaf(TreeNode root, int k) {
        minDistance = Int32.MaxValue;

        findClosestLeafTraversal(root,k);

        if(matching.left == null  && matching.right == null){
            return k;
        }
        
        findNearestLeafDistance(matching.left,0);
        findNearestLeafDistance(matching.right,0);

        return closestLeaf.val;
    }

    private int findClosestLeafTraversal(TreeNode node, int k) {
        if(node != null){
            if(node.val == k){
                matching = node;
                return 0;
            }

            int left = findClosestLeafTraversal(node.left,k);
            if(left != -1){
                // found in left
                findNearestLeafDistance(node.right,left+2);
                return left+1;
            }

            int right = findClosestLeafTraversal(node.right,k);
            if(right != -1){
                // found in right
                findNearestLeafDistance(node.left,right+2);
                return right+1;
            }
        }
        return -1;
    }

    private void findNearestLeafDistance(TreeNode root, int prevDist){
        if(root == null){
            return;
        }

        Queue<Tuple<TreeNode,int>> q = new Queue<Tuple<TreeNode,int>>();
        q.Enqueue(Tuple.Create(root,prevDist));

        while(q.Count > 0){
            var top = q.Dequeue();
            TreeNode node = top.Item1;
            int dist = top.Item2;

            if(node.left == null && node.right == null){
                if(dist < minDistance){
                    minDistance = dist;
                    closestLeaf = node;
                }
                break;
            }

            if(node.left != null){
                q.Enqueue(Tuple.Create(node.left,dist+1));
            }

            if(node.right != null){
                q.Enqueue(Tuple.Create(node.right,dist+1));
            }
        }
    }
}
```