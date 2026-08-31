# C# binary search

**Author:** clewBy
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831863/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831863/)

---

```
public class Solution {
    public IList<IList<int>> ClosestNodes(TreeNode root, IList<int> queries) {
        List<IList<int>> res = new();
        List<int> list = new();
        populate(root, list);
        foreach(int q in queries)
            res.Add(new List<int>() { findMin(list,q), findMax(list,q) });
        return res;
    }
    private void populate(TreeNode root, List<int> list){     
        if(root == null) return;
        populate(root.left, list);
        list.Add(root.val);
        populate(root.right, list);
    }
    private int findMin(List<int> list, int q){
        //largest value in the tree that is smaller than or equal to q
        int lo = 0, hi = list.Count-1;
        while(lo < hi){
            int mid = lo+(hi-lo)/2+1;
            if(list[mid] <= q){
                lo = mid;
            } else
                hi = mid-1;
        }
        return list[lo] > q ? -1 : list[lo];
    }
    private int findMax(List<int> list, int q){
        //smallest value in the tree that is greater than or equal to q
        int lo = 0, hi = list.Count-1;
        while(lo < hi){
            int mid = lo+(hi-lo)/2;
            if(list[mid] >= q){
                hi = mid;
            } else
                lo = mid+1;
        }
        return list[hi] < q ? -1 : list[hi];
    }
}
```