# C# | Beats 93% of the solution | O(log n) , O(1)

**Author:** nitishameyalc
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/6071838/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/6071838/)

---

# Intuition
There are Three cases which can be thought off where successor can can be found :


# Approach
1. Case 1 (Going down): Go to right sub tree and find min. element in it 
2. Case 2 (Going up): successor can be immediate right on the (h-1)th level of tree where h is height of the tree.
3. Case 3 (Going up): successor can be somewhere on the right on the (h-n)th level of tree where h is height of the tree and n is no. of level above the node is given.

# Complexity
- Time complexity:
If the tree is balanced the TC : log(n)

- Space complexity:
O(1)

# Code
```csharp []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode InorderSuccessor(TreeNode root, TreeNode p) {
        if(root == null) return null; 
        TreeNode curr = null;

        //Case 1 : go to right sub tree and go to extreme left to get the min. element
        if(p.right != null){
            curr = p.right;
            while(curr.left != null){
                curr = curr.left;
            }
            return curr;
        }
        //case 2 : go to the immediate right on top of the element
        //case 3 : go to the right node while parsing the top elemenet.
        //For case 2 and 3 we would require two TreeNode Anchestor and curr 
        TreeNode anchestor = null;
        curr = root;
        while(curr.val != p.val){
            if(p.val < curr.val){
                anchestor = curr;
                curr = curr.left;
            }
            else{
                curr = curr.right;
            }
        }
        return anchestor;
    }
}
```