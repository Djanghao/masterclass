# ✅ Clean C# solutions using DFS and BFS approaches

**Author:** KamronSaliev
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3265750/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3265750/)

---

# Depth-First Search
```
public class Solution 
{
    public int MinDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        var leftMinDepth = MinDepth(root.left);
        var rightMinDepth = MinDepth(root.right);

        if (leftMinDepth == 0 || rightMinDepth == 0)
        {
            return Math.Max(leftMinDepth, rightMinDepth) + 1;
        }

        return Math.Min(leftMinDepth, rightMinDepth) + 1;
    }
}
```

# Breadth-First Search
```
public class Solution 
{
    public int MinDepth(TreeNode root)
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

                if (current.left == null && current.right == null)
                {
                    return depth + 1;
                }
            }

            depth++;
        }

        return 0;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
