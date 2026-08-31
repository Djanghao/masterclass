# C# Dynamic Segment Tree (Online search) Beats 100%

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/falling-squares/solutions/2731704/](https://leetcode.com/problems/falling-squares/solutions/2731704/)

---

# Code
```
public class Solution {
    public class Node{
        public int l, r, cnt, add;
        public Node(int l, int r, int cnt, int add){
            this.l = l;
            this.r = r;
            this.cnt = cnt;
            this.add = add;
        }
    }

    const int N = (int)1e9 + 7, M = 100010;
    Node[] tr = new Node[M * 4];
    int pos = 1;
    public IList<int> FallingSquares(int[][] positions) {
        List<int> list = new();
        for(int i = 0; i < positions.Length; i++){
            int x = positions[i][0], len = positions[i][1];
            int res = Query(1, 1, N - 1, x, x + len - 1);
            Update(1, 1, N - 1 , x, x + len - 1, res + len);
            list.Add(Query(1, 1, N - 1, 1, N - 1));
        }
        return list.ToArray();
    }

    public void PushUp(int u){
        tr[u].cnt = Math.Max(tr[tr[u].l].cnt, tr[tr[u].r].cnt);
    }

    public void PushDown(int u){
        if(tr[u] == null) tr[u] = new Node(0, 0, 0, 0);
        if(tr[u].l == 0){
            tr[u].l = ++pos;
            tr[tr[u].l] = new Node(0, 0, 0, 0);
        }
        if(tr[u].r == 0){
            tr[u].r = ++pos;
            tr[tr[u].r] = new Node(0, 0, 0, 0);
        }
        if(tr[u].add == 0) return;

        tr[tr[u].l].add = tr[u].add;
        tr[tr[u].r].add = tr[u].add;

        tr[tr[u].l].cnt = tr[u].add;
        tr[tr[u].r].cnt = tr[u].add;
        tr[u].add = 0;
    }

    public void Update(int u, int lc, int rc, int l, int r, int d){
        if(l <= lc && rc <= r){
            tr[u].cnt = d;
            tr[u].add = d;
            return;
        }
        int mid = rc + lc >> 1;
        PushDown(u);
        if(l <= mid) Update(tr[u].l, lc, mid, l, r, d);
        if(r > mid) Update(tr[u].r, mid + 1, rc, l, r, d);
        PushUp(u);
    }

    public int Query(int u, int lc, int rc, int l, int r){
        if(l <= lc && rc <= r) return tr[u].cnt;
        int max = 0;
        PushDown(u);
        int mid = rc + lc >> 1;
        if(l <= mid) max = Query(tr[u].l, lc, mid, l, r);
        if(r > mid) max = Math.Max(max, Query(tr[u].r, mid + 1, rc, l, r));
        return max;
    }
}
```