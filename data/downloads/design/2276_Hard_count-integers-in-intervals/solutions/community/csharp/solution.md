# C# Dynamic Segment Tree (Implicit Online Search)

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/2732892/](https://leetcode.com/problems/count-integers-in-intervals/solutions/2732892/)

---


# Code
```
public class CountIntervals {
    public class Node{
        public int l, r, add, cnt;
    }
    const int N = (int)1e9 + 7, M = 1000010;
    Node[] tr = new Node[M * 4];
    int pos = 1, st = 0;

    public CountIntervals() {

    }
    
    public void Add(int left, int right) {
        st++;
        Update(1, 1, N - 1, left, right, 1);
    }
    
    public int Count() {
        if(st == 0) return 0;
        return Query(1, 1, N - 1, 1, N - 1);
    }

    public void PushUp(int u){
        tr[u].cnt = tr[tr[u].l].cnt + tr[tr[u].r].cnt;
    }

    public void PushDown(int u, int len){
        if(tr[u] == null)
            tr[u] = new Node();
        if(tr[u].l == 0){
            tr[u].l = ++pos;
            tr[tr[u].l] = new Node();
        }
        if(tr[u].r == 0){
            tr[u].r = ++pos;
            tr[tr[u].r] = new Node();
        }

        if(tr[u].add == 0) return;
        tr[tr[u].l].cnt = len - len / 2;
        tr[tr[u].r].cnt = len / 2;
        tr[tr[u].l].add = tr[tr[u].r].add = tr[u].add;
        tr[u].add = 0;
    }

    public void Update(int u, int lc, int rc, int l, int r, int k){
        if(l <= lc && rc <= r){
            tr[u].add = k;
            tr[u].cnt = rc - lc + 1;
            return;
        }

        PushDown(u, rc - lc + 1);
        int mid = rc + lc >> 1;
        if(mid >= l) Update(tr[u].l, lc, mid, l, r, k);
        if(mid < r) Update(tr[u].r, mid + 1, rc, l, r, k);
        PushUp(u);
    }

    public int Query(int u, int lc, int rc, int l, int r){
        if(l <= lc && rc <= r)
            return tr[u].cnt;
        
        PushDown(u, rc - lc + 1);
        int mid = lc + rc >> 1, ans = 0;
        if(l <= mid) ans = Query(tr[u].l, lc, mid, l, r);
        if(r > mid) ans += Query(tr[u].r, mid + 1, rc, l, r);
        return ans;
    }
}

/**
 * Your CountIntervals object will be instantiated and called as such:
 * CountIntervals obj = new CountIntervals();
 * obj.Add(left,right);
 * int param_2 = obj.Count();
 */
```