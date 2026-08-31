# [JAVA] Simple DFS Solution 100% | 100%

**Author:** jeevy222
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/518545/](https://leetcode.com/problems/two-sum-bsts/solutions/518545/)

---

The idea is pretty simple
* Traverse the first tree in DFS
* Look for the compliment in the 2nd tree using binary search.
```
class Solution {
    public boolean twoSumBSTs(TreeNode root1, TreeNode root2, int target) {
        //Traverse 1st tree using DFS and search for the compliment in the 2nd tree using BST property.
        if (root1 == null || root2 == null) return false;
        return dfs(root1,root2,target);
    }
    private boolean dfs(TreeNode node, TreeNode root2, int target){
        if (node == null) return false;
        if (searchBST(root2, target - node.val)) return true;
        return dfs(node.left, root2, target) || dfs(node.right, root2, target); 
    }
    
    private boolean searchBST(TreeNode root2, int target){
        if (root2 == null) return false;
        if (root2.val == target) return true;
        if (target > root2.val) 
            return searchBST(root2.right, target);
        else 
            return searchBST(root2.left, target);
    }
}
```

Let's discuss the complexity

* Space - O(1) if we exclude stack space
* Time - 
			* Let 'n' and 'm' be the number of nodes in tree1 and tree2. 
			* Complexity = O(n) + O(nlogm)