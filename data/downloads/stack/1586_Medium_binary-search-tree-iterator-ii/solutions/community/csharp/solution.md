# C# Binary Search

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/3229556/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/3229556/)

---

# Complexity
- Time complexity for each operation: $$O(height)$$ 
- Space complexity for each operation: $$O(1)$$

# Code
```
public class BSTIterator
{
    private TreeNode root;
    
    private int currentValue;

    public BSTIterator(TreeNode root)
    {
        this.root = root;
        this.currentValue = int.MinValue;
    }

    public bool HasNext() => this.FindNextNode() != null;

    public bool HasPrev() => this.FindPrevNode() != null;

    public int Next() => this.currentValue = this.FindNextNode().val;

    public int Prev() => this.currentValue = this.FindPrevNode().val;

    private TreeNode FindNextNode()
    {
        TreeNode next = null;
        var node = this.root;
        while (node != null)
        {
            if (node.val > this.currentValue)
            {
                next = node;
                node = node.left;
            }
            else
            {
                node = node.right;
            }
        }

        return next;
    }

    private TreeNode FindPrevNode()
    {
        TreeNode prev = null;
        var node = this.root;
        while (node != null)
        {
            if (node.val < this.currentValue)
            {
                prev = node;
                node = node.right;
            }
            else
            {
                node = node.left;
            }
        }

        return prev;
    }
}
```