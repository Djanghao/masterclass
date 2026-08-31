# C# Segment Tree + Binary Search + Prefix Sum + Greedy Beats 100%

**Author:** enze_zhang
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3917553/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3917553/)

---

# Code
```
public class Solution {
    const int N = (int)1e5 + 1, mod = (int)1e9 + 7;
    public class Node{
        public int l, r;
        public long cnt, add;
        public Node(int l, int r){
            this.l = l;
            this.r = r;
            this.cnt = 0;
            this.add = 0;
        }
    }
    Node[] tr = new Node[N * 4];

    public long MaxPower(int[] stations, int t, int k) {
        int n = stations.Length;
        long[] qwq = new long[n];
        Build(1, 1, n + 1);
        for(int i = 0; i < n; i++) Update(1, i + 1, i + 1, stations[i]);
        for(int i = 0; i < n; i++) 
            qwq[i] = Query(1, Math.Max(i + 1 - t, 1), Math.Min(n, i + 1 + t));
        long l = 0, r = (long)1e14 + 1;;
        while(l < r){
            long mid = (r - l) / 2 + l;
            if(!Search(qwq, mid, t, k)) r = mid;
            else l = mid + 1; 
        }
        return l - 1;
    }

    public bool Search(long[] qaq, long mid, int r, long k){
        long[] ysy = new long[qaq.Length], cum = new long[(int)1e5 + 1];
        for(int i = 0; i < qaq.Length; i++) ysy[i] = qaq[i] - mid;
        for(int i = 0; i < ysy.Length; i++){
            if(i > 0) cum[i] += cum[i - 1];
            if(ysy[i] + cum[i] >= 0) continue;
            if(ysy[i] + cum[i] < 0 && k >= -(cum[i] + ysy[i])){
                k += ysy[i] + cum[i];
                if(i + r * 2 + 1 < qaq.Length) cum[i + r * 2 + 1] += (cum[i] + ysy[i]);
                cum[i] += -(cum[i] + ysy[i]);
            }
            else if(ysy[i] + cum[i] < 0) return false;
        }
        return true;
    }

    public void Build(int u, int l, int r){
        tr[u] = new Node(l, r);
        if(l == r) return;
        int mid = l + r >> 1;
        Build(u << 1, l, mid);
        Build(u << 1 | 1, mid + 1, r);
    }

    public void PushUp(int u){
        tr[u].cnt = tr[u << 1].cnt + tr[u << 1 | 1].cnt;
    }

    public void PushDown(int u){
        if(tr[u].add == 0) return;
        tr[u << 1].add += tr[u].add;
        tr[u << 1 | 1].add += tr[u].add;
        tr[u << 1].cnt += tr[u].add * (tr[u << 1].r - tr[u << 1].l + 1);
        tr[u << 1 | 1].cnt += tr[u].add * (tr[u << 1 | 1].r - tr[u << 1 | 1].l + 1);
        tr[u].add = 0;
    }

    public void Update(int u, int l, int r, long v){
        if(l <= tr[u].l && tr[u].r <= r){
            tr[u].cnt += (tr[u].r - tr[u].l + 1) * v;
            tr[u].add += v;
            return;
        }
        PushDown(u);
        int mid = tr[u].l + tr[u].r >> 1;
        if(l <= mid) Update(u << 1, l, r, v);
        if(r > mid) Update(u << 1 | 1, l, r, v);
        PushUp(u);
    }

    public long Query(int u, int l, int r){
        if(l <= tr[u].l && tr[u].r <= r) return tr[u].cnt;
        PushDown(u);
        int mid = tr[u].l + tr[u].r >> 1;
        long ans = 0;
        if(l <= mid) ans = Query(u << 1, l, r);
        if(r > mid) ans += Query(u << 1 | 1, l, r);
        return ans;
    }
}
```