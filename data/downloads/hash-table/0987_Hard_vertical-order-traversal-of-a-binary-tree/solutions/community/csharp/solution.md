# (tuples, are_awesome)

**Author:** izpavlovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/5924159/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/5924159/)

---

# Approach
Using SortedDictionary for "Columns" and PriorityQueue for "Rows". I think I got very elegant usage of ValueTuple.CompareTo to facilitate the third level of sorting (by value) without writing ton of code.

# Complexity
- Time complexity:
O(NlogN)

- Space complexity:
O(N)

# Code
```csharp []
public class Solution {
    SortedDictionary<int, PriorityQueue<int, (int, int)>> map = 
        new SortedDictionary<int, PriorityQueue<int, (int, int)>>();

    public IList<IList<int>> VerticalTraversal(TreeNode root) {
        VerticalTraversal(root, 0, 0);
        var result = new List<IList<int>>();

        foreach(var q in map.Values){
            var list = new List<int>();

            while(q.Count > 0) list.Add(q.Dequeue());
            result.Add(list);
        }

        return result;
    }

    public void VerticalTraversal(TreeNode root, int depth, int offset){
        if(root == null) return;

        VerticalTraversal(root.left, depth + 1, offset - 1);

        if(!map.ContainsKey(offset)) map[offset] = new PriorityQueue<int, (int, int)>();

        map[offset].Enqueue(root.val, (depth, root.val));

        VerticalTraversal(root.right, depth + 1, offset + 1);
    }
}
```