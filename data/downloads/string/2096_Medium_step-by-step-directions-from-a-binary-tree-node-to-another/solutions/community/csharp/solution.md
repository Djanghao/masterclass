# Beats 84% solution using DFS (C#)

**Author:** BajeMan
**Votes:** 5
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/3937011/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/3937011/)

---

# Intuition
The problem requires finding the step-by-step directions from one node to another in a binary tree. You can approach this by performing Depth-First Search (DFS) to find the paths from the root to both nodes and then compare the paths to generate the final directions.

# Approach
1. Initialize two `StringBuilder` objects, `startChars` and `finalChars`, to store the directions for the start and destination nodes respectively.

2. Perform DFS to find the path from the root to the `startValue` node using the `DFS` function. While traversing the tree, append 'L' or 'R' to the `startChars` string depending on whether you move left or right in the tree.

3. Similarly, perform DFS to find the path from the root to the `destValue` node using the same `DFS` function. Again, append 'L' or 'R' to the `finalChars` string.

4. Remove the common path from both `startChars` and `finalChars` using the `RemoveCommonPath` function. This step ensures that you only include the directions that lead from the common ancestor to the destination.

5. Reverse the `finalChars` string using the `ReverseSB` function. This step is required because you've traversed from the root to the destination node, and you need to reverse the directions to get the correct path from the source to the destination.

6. Replace any remaining 'L' or 'R' characters in the `startChars` string with 'U' (up), as the directions need to be adjusted to reflect the upward movement.

7. Finally, return the concatenation of `startChars` and `finalChars` as the result.

# Complexity
- Time complexity:
The DFS function traverses the tree in a depth-first manner, visiting each node exactly once. Hence, the time complexity is O(n), where n is the number of nodes in the binary tree.

- Space complexity:
The space complexity is determined by the space used by the `StringBuilder` objects and the recursive call stack during the DFS traversal. Since you're using two `StringBuilder` objects for storing directions and the maximum depth of recursion in a binary tree is O(log n) (for a balanced tree), the overall space complexity is O(n) due to the `StringBuilder` objects.

# Code
```
public class Solution {
    public string GetDirections(TreeNode root, int startValue, int destValue) {
        StringBuilder startChars = new(), finalChars = new();
        DFS(root, startValue, startChars);
        DFS(root, destValue, finalChars);
        
        RemoveCommonPath(startChars, finalChars);
        
        ReverseSB(finalChars);

        startChars.Replace('R', 'U');
        startChars.Replace('L', 'U');
        return startChars.Append(finalChars).ToString();
    }
    private bool DFS(TreeNode node, int find, StringBuilder target){
        if(node is null) return false;
        if(node.val == find) return true;

        var left = DFS(node.left, find, target);
        if(left) target.Append('L');
        var right = DFS(node.right, find, target);
        if(right) target.Append('R');

        return left || right;
    }

    private void RemoveCommonPath(StringBuilder path1, StringBuilder path2){
        while(path1.Length > 0 && path2.Length > 0 && path1[path1.Length - 1] == path2[path2.Length - 1]){
            path1.Remove(path1.Length - 1, 1);
            path2.Remove(path2.Length - 1, 1);
        }
    }

    private void ReverseSB(StringBuilder path){
        for(int i = 0; i < path.Length / 2; i++){
            var temp = path[path.Length - i - 1];
            path[path.Length - i - 1] = path[i];
            path[i] = temp;
        }
    }
}

```