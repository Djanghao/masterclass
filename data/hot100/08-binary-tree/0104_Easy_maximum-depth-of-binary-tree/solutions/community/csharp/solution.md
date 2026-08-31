# ✅ Clean C# solutions using DFS and BFS approaches

**Author:** KamronSaliev
**Votes:** 46
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3265745/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3265745/)

---

# Depth-First Search
```
public class Solution 
{
    public int MaxDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        var leftMaxDepth = MaxDepth(root.left);
        var rightMaxDepth = MaxDepth(root.right);

        return Math.Max(leftMaxDepth, rightMaxDepth) + 1;
    }
}
```

# Breadth-First Search
```
public class Solution 
{
    public int MaxDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        var depth = 0;

        while (queue.Count != 0)
        {
            var size = queue.Count;

            for (var i = 0; i < size; i++)
            {
                var current = queue.Dequeue();

                if (current.left != null)
                {
                    queue.Enqueue(current.left);
                }

                if (current.right != null)
                {
                    queue.Enqueue(current.right);
                }
            }

            depth++;
        }

        return depth;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
