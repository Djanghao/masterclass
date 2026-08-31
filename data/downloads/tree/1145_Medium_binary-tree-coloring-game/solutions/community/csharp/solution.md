# C# Clean DFS Solution

**Author:** trickerCS
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/4468462/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/4468462/)

---


# Code
```
public class Solution {
    public bool BtreeGameWinningMove(TreeNode root, int n, int x) {
        int xlCount = -1, xrCount = -1;
        GetChildrenCount(root, x, ref xlCount, ref xrCount);
        return xlCount > n/2 || xrCount > n/2 || n - xlCount - xrCount - 1 > n/2;
    }

    public int GetChildrenCount(TreeNode root, int x, ref int xlCount, ref int xrCount)
    {
        if(root == null || xlCount != -1) return 0;

        var leftCount = GetChildrenCount(root.left, x, ref xlCount, ref xrCount);
        var rightCount = GetChildrenCount(root.right, x, ref xlCount, ref xrCount);

        if(x == root.val){
            xlCount = leftCount;
            xrCount = rightCount; 
        }

        return leftCount + rightCount + 1;
    }
}
```