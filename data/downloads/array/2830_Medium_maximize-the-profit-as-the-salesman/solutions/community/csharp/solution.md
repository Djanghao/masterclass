# C# Binary Indexed Tree + Dynamic Programming

**Author:** enze_zhang
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934151/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934151/)

---

# Intuition
Using BIT as an optimization to support the quries during each state of DP processes -> max(0, l - 1)

# Code
```
public class Solution {
    const int N = (int)1e5 + 1;
    int[] tr = new int[N];
    
    public int MaximizeTheProfit(int n, IList<IList<int>> offers) {
        int[] f = new int[N];
        int[][] q = new int[offers.Count][];
        for(int i = 0; i < offers.Count; i++){
            q[i] = offers[i].ToArray();
        }
        Array.Sort(q, (a, b) => a[0] - b[0]);
        
        for(int i = 0; i < q.Length; i++){
            int l = q[i][0], r = q[i][1], c = q[i][2];
            f[r] = Math.Max(f[r], c + Qr(l));
            Upd(r + 1, f[r]);
        }
        return f.Max();
    }
    
    public void Upd(int x, int v){
        for(; x < N; x += (x & -x)) tr[x] = Math.Max(tr[x], v);
    }

    public int Qr(int x){
        int a = 0;
        for(; x > 0; x -= (x & -x)) a = Math.Max(a, tr[x]);
        return a;
    }
}

```