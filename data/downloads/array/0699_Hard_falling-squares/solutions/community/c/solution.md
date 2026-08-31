# Segment Tree Lazy Propagation || O(nlog(n)) || C++

**Author:** NAHDI51
**Votes:** 3
**Link:** [https://leetcode.com/problems/falling-squares/solutions/1355312/](https://leetcode.com/problems/falling-squares/solutions/1355312/)

---

I used an unordered map as the container of the segment tree, whose expected complexity is O(1).

```
vector<int> fallingSquares(vector<vector<int>>& p) {
    segment_tree seg((int)(1e8+1e6)+1);   //Boundary position
    int mx = 0;
    vector<int> ans;
    for(int i = 0; i < p.size(); i++) {
        int h = p[i][1] + seg.query(p[i][0]+1, p[i][0] + p[i][1]);
        seg.update(p[i][0]+1, p[i][0]+p[i][1], h);
        mx = max(mx, h);
        ans.push_back(mx);
    }
    return ans;
}
```
Segement Tree implementation:
```
class segment_tree {
unordered_map<unsigned int, int> seg;
unordered_map<unsigned int, int> lazy;

int size;
bool invalid(int x, int y) {
    return x > y;
}
bool out_range(int a, int b, int x, int y) {
    return a > y || b < x;
}
bool in_range(int a, int b, int x, int y) {
    return a <= x && y <= b;
}
void propagate(int k, int x, int y, int val) {
    seg[k] = val;
    if(x != y)
        lazy[2*k] = val, lazy[2*k+1] = val;
}
void lazy_update(int k, int x, int y) {
    if(lazy[k]) {
        seg[k] = lazy[k];
        if(x != y)
            lazy[2*k] = lazy[k], lazy[2*k+1] = lazy[k];
        lazy[k] = 0;
    }
}
public:
segment_tree(int n) {
    size = n+1;
}
void update(int l, int r, int val) {
    update(l, r, 1, 0, size-1, val);
}
void update(int a, int b, int k, int x, int y, int val) {
    if(invalid(x, y)) return;
    lazy_update(k, x, y);
    if(out_range(a, b, x, y)) return;
    if(in_range(a, b, x, y)) {propagate(k, x, y, val); return;}
    int d = (x+y) / 2;
    update(a, b, 2*k, x, d, val);
    update(a, b, 2*k+1, d+1, y, val);
    seg[k] = max(seg[2*k], seg[2*k+1]);
}
int query(int l, int r) {
    return query(l, r, 1, 0, size-1);
}
int query(int a, int b, int k, int x, int y) {
    if(invalid(x, y)) return INT_MIN;
    lazy_update(k, x, y);
    if(out_range(a, b, x, y)) return INT_MIN;
    if(in_range(a, b, x, y)) return seg[k];
    int d = (x+y)/2;
    return max(
    query(a, b, 2*k, x, d), 
    query(a, b, 2*k+1, d+1, y)
    );
}
};
```