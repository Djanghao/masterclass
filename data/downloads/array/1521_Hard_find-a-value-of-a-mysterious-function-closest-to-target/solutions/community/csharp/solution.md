# Beats 100.00% C# Sparse table and binary search solution

**Author:** ahmedsalah141014
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/5741092/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/5741092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
From each i find the best index R such that ANDING from (i , R) closest to the target

# Complexity
- Time complexity:
O(N * log(n))

- Space complexity:
O(N * log(n))

# Code
```csharp []
public struct SparseTable<T>
{
    T[,] Table;
    Func<T , T , T> cmp;
    public void Build(T[] arr , Func<T , T , T> f)
    {
        cmp = f;
        int n = arr.Length;
        int lg = (int)Math.Log2(n) + 1;
        Table = new T[lg, n];
        for (int i = 0; i < n; i++)
            Table[0, i] = arr[i];

        for (int mask = 1; (1 << mask) <= n; mask++)
        {
            for (int i = 0; i + (1 << mask) <= n; i++)
            {
                Table[mask, i] = cmp(Table[mask - 1, i], Table[mask - 1, i + (1 << (mask - 1))]);
            }

        }
    }

    public T Query(int l , int r)
    {
        int mask = (int)Math.Log2(r - l + 1);
        return cmp(Table[mask, l], Table[mask, r - (1 << mask) + 1]);
    }
}

public class Solution {

    public int ClosestToTarget(int[] arr, int target) 
    {
        SparseTable<int> st = new SparseTable<int>();
        st.Build(arr, (x, y) => x & y);
        int ans = int.MaxValue;
        for (int i = 0; i < arr.Length; i++)
        {
            // Find best R.
            int L = i, R = arr.Length - 1;
            while (L < R)
            {
                int M = (L + R + 1) / 2;
                int AND = st.Query(i, M);
                if (AND >= target)
                    L = M;
                else 
                    R = M - 1;
            }
            ans = Math.Min(ans , Math.Abs(target - st.Query(i , L)));
            if (L + 1 < arr.Length)
                ans = Math.Min(ans , Math.Abs(target - st.Query(i , L + 1)));

        }

        return ans;
    }
}
```