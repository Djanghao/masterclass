# c#, Breadth First Search

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5194897/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5194897/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can perform standard **B**readth **F**irst **S**earch (**BFS**) algorithm and sum level after level

# Approach
<!-- Describe your approach to solving the problem. -->
A simple queue based BFS

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public int MinimumLevel(TreeNode root) {
        Queue<TreeNode> agenda = new();
        agenda.Enqueue(root);

        long min = root.val;
        int minLevel = 1;

        for (int level = 1; agenda.Count > 0; ++level) {
            long sum = 0;

            for (int i = agenda.Count - 1; i >= 0; --i) {
                var node = agenda.Dequeue();

                sum += node.val;

                if (node.left is not null)
                   agenda.Enqueue(node.left);

                if (node.right is not null)
                   agenda.Enqueue(node.right);   
            }

            if (sum < min) 
                (min, minLevel) = (sum, level);
        }

        return minLevel;
    }
}
```