# Segment Tree in C#

**Author:** sergey-tihon
**Votes:** 0
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5320993/](https://leetcode.com/problems/peaks-in-array/solutions/5320993/)

---

# Complexity
- Time complexity: $$O(NlogN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class SegTree {
    public SegTree(int[] arr) {
        n = arr.Length;
        tree = new int[2*n+1];
        for(var i=0; i<n; i++)
            tree[n+i]=arr[i];
        for(var i=n-1; i>0; i--)
            tree[i] = tree[i<<1] + tree[(i<<1)|1];
    }
    private int n;
    private int[] tree;
    public void update(int p, int val) {
        tree[n+p] = val;
        for(var i=p+n; i>1; i>>=1)
            tree[i>>1] = tree[i] + tree[i^1]; 
    }
    public int query(int l, int r) {
        int res=0;
        for(l+=n, r+=n; l<r; l>>=1, r>>=1) {
            if ((l&1)>0) res += tree[l++];
            if ((r&1)>0) res += tree[--r];
        }
        return res;
    }
}
public class Solution {
    public IList<int> CountOfPeaks(int[] nums, int[][] queries) {
        int n = nums.Length;
        int f(int i) {
            if (i>0 && nums[i]>nums[i-1] &&
                i+1<n && nums[i]>nums[i+1])
                return 1;
            return 0;
        }
        var p = new int[n];
        for(var i=0; i<n; i++)
            p[i] = f(i);
        var tree = new SegTree(p);
        var res = new List<int>();
        foreach(var q in queries) {
            if (q[0]==2) {
                int ind = q[1], val = q[2];
                nums[ind] = val;
                tree.update(ind, f(ind));
                if (ind>0) 
                    tree.update(ind-1, f(ind-1));
                if (ind+1<n)
                    tree.update(ind+1, f(ind+1));
            } else {
                int l=q[1], r=q[2];
                if (l+1<r)
                    res.Add(tree.query(l+1,r));
                else
                    res.Add(0);
            }
        }
        return res;
    }
}
```