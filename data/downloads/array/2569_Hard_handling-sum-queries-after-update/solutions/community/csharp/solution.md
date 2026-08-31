# C# || Solution with Lazy Propagation Segment Tree

**Author:** vdmhunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3202741/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3202741/)

---

# Code
```
public class Solution
{
    private readonly int[] _tree = new int[400000];
    private readonly int[] _lazy = new int[400000];

    public long[] HandleQuery(int[] nums1, int[] nums2, int[][] queries)
    {
        var sum = 0L;
        
        for (var i = 0; i < nums1.Length; i++)
            sum += 1L * nums2[i];
        
        Build(nums1, 1, 0, nums1.Length - 1);
        var res = new List<long>();
        
        foreach (var q in queries)
            if (q[0] == 1)
                UpdateTree(1, 0, nums1.Length - 1, q[1], q[2]);
            else if (q[0] == 2)
                sum += (long)_tree[1] * q[1];
            else
                res.Add(sum);
        
        return res.ToArray();
    }

    private int Build(int[] arr, int n, int a, int b)
    {
        if (a == b)
            return _tree[n] = arr[a];
        
        return _tree[n] = Build(arr, 2 * n, a, (a + b) / 2) + Build(arr, 2 * n + 1, (a + b) / 2 + 1, b);
    }

    private int UpdateTree(int n, int a, int b, int i, int j)
    {
        // outside
        if (b < i || a > j) 
            return _lazy[n] != 0 ? b - a + 1 - _tree[n] : _tree[n];

        if (_lazy[n] != 0)
        {
            _tree[n] = b - a + 1 - _tree[n];

            if (a != b)
            {
                _lazy[n * 2] = _lazy[n * 2] == 0 ? 1 : 0;
                _lazy[n * 2 + 1] = _lazy[n * 2 + 1] == 0 ? 1 : 0;
            }

            _lazy[n] = 0;
        }

        if (a < i || b > j)
            return _tree[n] = UpdateTree(n * 2, a, (a + b) / 2, i, j) + UpdateTree(n * 2 + 1, (a + b) / 2 + 1, b, i, j);
        
        // inside
        _tree[n] = b - a + 1 - _tree[n];
            
        if (a == b)
            return _tree[n];
            
        _lazy[n * 2] = _lazy[n * 2] == 0 ? 1 : 0;
        _lazy[n * 2 + 1] = _lazy[n * 2 + 1] == 0 ? 1 : 0;

        return _tree[n];
    }
}

```