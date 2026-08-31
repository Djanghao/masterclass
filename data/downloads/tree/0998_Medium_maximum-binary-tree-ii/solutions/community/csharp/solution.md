# ✅Beats 100% | 2 lines recursive Java/C# solution with explanation

**Author:** Muhammad-Diyor
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/5325754/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/5325754/)

---

# Problem objective
If you've solved the [Maximum Binary Tree 1](https://leetcode.com/problems/maximum-binary-tree/description/) problem, you know how we built the Tree. If you haven't solved it yet, please solve it first, that's going to make this problem easier to understand.

So, the problem is asking us to modify the tree so it looks like if the val was appended at the end of the list which we built our tree on.

# Approach
- If root is null, we just return new Tree with val as its value;
- If val is greater than root.val, then we can just return new Tree, val as its value, and root itself being the left subtree of it. (Remember that `val` was appended to the end of the list)
- Or none of our two conditions are not true, we can just countinue this process recurcively with the right subtree.

# Complexity
![image.png](./images/0.png)

##### Time Complexity:
- **Worst Case:** *O(n)*, where \\(n\\) is the number of nodes in the tree. This happens if the tree is skewed and the value needs to be inserted at the bottom.

##### Space Complexity:
- **Worst Case:** *O(n)*, due to the maximum depth of the recursion stack in a skewed tree.


# 2 lines Code
More readable one is below this one.
``` 
class Solution {
    public TreeNode insertIntoMaxTree(TreeNode root, int val) {
        if(root == null || val > root.val) return new TreeNode(val, root, null);
        else return new TreeNode(root.val, root.left, insertIntoMaxTree(root.right, val));
    }
}
```
### More readable one
```
class Solution {
    public TreeNode insertIntoMaxTree(TreeNode root, int val) {
        if(root==null) return new TreeNode(val);
        if(root.val<val){
            TreeNode newRoot=new TreeNode(val);
            newRoot.left=root;
            return newRoot;
        }
        root.right=insertIntoMaxTree(root.right,val);
        return root;
    }
}
```

#### If you like the solution, don't forget to upvote
##### 1 upvote = 10 push-ups
![image.png](./images/1.png)

