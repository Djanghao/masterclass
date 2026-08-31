# C# and TypeScript Solution . ❇️✅

**Author:** ArafatSabbir
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238868/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238868/)

---

# \u2B06\uFE0FLike|\uD83C\uDFAFShare|\u2B50Favourite
# Approach
1. Traverse the tree in postorder and get a unique identifier for each subtree.
2. Use a dictionary to count the number of times each subtree occurs in the tree.
3. Return all subtrees with more than one occurrence.

# Runtime & Memory
![image.png](./images/0.png)

# Complexity
- Time complexity:
O(N^2) to traverse the tree and count the number of subtrees.

- Space complexity:
O(N^2) to keep the entire tree.

# C# Code
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
public class Solution 
{
    public IList<TreeNode> FindDuplicateSubtrees(TreeNode root) 
    {
        var result = new List<TreeNode>();
        var visited = new Dictionary<string, int>();
        Traverse(root, visited, result);
        return result;
    }

    private string Traverse(TreeNode node, Dictionary<string, int> visited, List<TreeNode> result)
    {
        if (node == null)
            return "#";

        var left = Traverse(node.left, visited, result);
        var right = Traverse(node.right, visited, result);

        var key = $"{node.val},{left},{right}";
        if (visited.ContainsKey(key))
        {
            if (visited[key] == 1)
                result.Add(node);
            visited[key]++;
        }
        else
        {
            visited.Add(key, 1);
        }

        return key;
    }
}
```

# TypeScript Code
```
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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const result: Array<TreeNode | null> = [];
    const visited: Map<string, number> = new Map();
    traverse(root, visited, result);
    return result;
};

function traverse(node: TreeNode | null, visited: Map<string, number>, result: Array<TreeNode | null>): string {
    if (node === null) return '#';

    const left = traverse(node.left, visited, result);
    const right = traverse(node.right, visited, result);

    const key = `${node.val},${left},${right}`;
    if (visited.has(key)) {
        if (visited.get(key) === 1) result.push(node);
        visited.set(key, visited.get(key) + 1);
    } else {
        visited.set(key, 1);
    }

    return key;
}
```