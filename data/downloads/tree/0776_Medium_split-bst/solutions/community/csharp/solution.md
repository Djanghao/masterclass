# C# | Quick learner | Weakness

**Author:** jianminchen
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-bst/solutions/3845204/](https://leetcode.com/problems/split-bst/solutions/3845204/)

---

July 31, 2023
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I have to learn how to work on my weakness and then solve the problem quickly in less than 15 minutes. 

Weakness:
1. No need to discuss root.val == target as a base case 
2. Missing the work - SplitBST return value - one of them is not used
3. Root's left or right child should be calculated in the recursive call. 
# Approach
<!-- Describe your approach to solving the problem. -->
The good approach is to work on recursive calls, ask a few questions. 

Ask myself why BST can be splitted easily into two given the target. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

The following C# code passes online judge. 

```
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
    public TreeNode[] SplitBST(TreeNode root, int target)
        {
            var result = new TreeNode[2];
            if (root == null)
            {
                return result; 
            }

            // Found bigger one 
            if (root.val > target)
            {              
                var subLeft = SplitBST(root.left, target);
                root.left = subLeft[1];

                return new TreeNode[] { subLeft[0], root };
            }
            else  // find small one - root
            {                               
                var subResult = SplitBST(root.right, target);
                root.right = subResult[0];
                return new TreeNode[] { root, subResult[1] };                              
            }
        }
}
```

# My fist submission | Failed

I spent over one hour to work on the following C# solution. I learned so many lessons through my practice. 

1. Redundant code => root.left == null 
2. Redundant code => root.left.val == target
3. Redundant code => In total, there are six if statements can be cut to none. 

```
public class Solution {
    public TreeNode[] SplitBST(TreeNode root, int target)
        {
            var result = new TreeNode[2];
            if (root == null)
            {
                return result; 
            }

            if (root.val == target)
            {
                var sub = SplitBST(root.right, target);
                return new TreeNode[] { root, sub[1]};
            }

            // Found bigger one 
            if (root.val > target)
            {
                if (root.left == null)
                {
                    return new TreeNode[] { null, root };
                }

                if (root.left.val == target) // 2
                {
                    var saved = root.left; // 2
                    root.left = root.left.right; // 4.left = 3
                    saved.right = null; // 2.right = null

                    return new TreeNode[] { saved, root };
                }

                if (root.left.val < target)
                {
                    var subResult = SplitBST(root.right, target);
                    return new TreeNode[] { subResult[0], root };
                }

                var subLeft = SplitBST(root.left, target);
                return new TreeNode[] { subLeft[0], root };
            }
            else  // find small one - root
            {
                if (root.right == null)
                {
                    return new TreeNode[] { root, null };
                }

                if (root.right.val == target)
                {
                    var saved = root.right;
                    root.right = root.right.left;
                    root.right.right = null;   // separate two trees

                    return new TreeNode[] { root, saved };
                }

                if (root.right.val < target)
                {
                    var subResult = SplitBST(root.right, target);
                    return new TreeNode[] { root, subResult[1] };
                }

                var subRight = SplitBST(root.left, target);
                return new TreeNode[] { root, subRight[1] };
            }
        }
}
```
