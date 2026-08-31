# Going Backwards + Fenwick Tree

**Author:** votrubac
**Votes:** 27
**Link:** [https://leetcode.com/problems/block-placement-queries/solutions/5207345/](https://leetcode.com/problems/block-placement-queries/solutions/5207345/)

---

We need to track a max gap till `x` in a mutating array, but our gaps are decreasing.

To counter that, we process queries in the reverse order.

First, we collect and sort all `blocks`. Then, we go left to right, and, for each block, we track the largest gap so far in BIT (AKA Fenwick Tree).

Finally, we go right-to-left.
1. For block (type = `1`):
	- We remove the block.
	- We update the largest gap in segment tree for the next block (if exists).
2. For a query (type = `2`):
	- We get the previous block from the sorted set.
	- We check the distance to the previous block, and maximum gap till `x` using BIT.

**C++**
```cpp
vector<bool> getResults(vector<vector<int>>& qs) {
    vector<bool> res;
    set<int> blocks{0}; // sentinel
    for (const auto &q : qs)
        if (q[0] == 1)
            blocks.insert(q[1]);
    for (auto it = next(begin(blocks)); it != end(blocks); ++it)
        update(*it, *it - *prev(it));
    for (int i = qs.size() - 1; i >= 0; --i) {
        int t = qs[i][0], x = qs[i][1], sz = t == 1 ? 0 : qs[i][2];
        auto it = blocks.lower_bound(x);
        if (t == 1) {
            if (next(it) != end(blocks))
                update(*next(it), *next(it) - *prev(it));
            blocks.erase(it);
        }
        else
            res.push_back(x - *prev(it) >= sz || getmax(x) >= sz);
    }
    return vector<bool>(rbegin(res), rend(res));
}
int bit[50001] = {};
int getmax(int r) {
    int ret = 0;
    for (; r >= 0; r = (r & (r + 1)) - 1)
        ret = max(ret, bit[r]);
    return ret;
}
void update(int idx, int val) {
    for (; idx < 50001; idx = idx | (idx + 1))
        bit[idx] = max(bit[idx], val);
}
```

**Python**
```python
class Solution:    
    def getResults(self, queries: List[List[int]]) -> List[bool]:
        bit, res = [0] * (min(50000, 3 * len(queries)) + 1), []
        def bit_range(p, down=True):
            while p >= 0 and p < len(bit):
                yield p
                p = (p & (p + 1)) - 1 if down else p | (p + 1)        
        def get_max(p: int) -> int:
            return max(bit[i] for i in bit_range(p))
        def update(p, val):
            for idx in bit_range(p, False):
                 bit[idx] = max(bit[idx], val);
            
        blocks = [0] + sorted([x for t, x, *sz in queries if t == 1])
        for i, b in enumerate(blocks[1:]):
            update(b, b - blocks[i])
        for t, x, *sz in reversed(queries):
            p = bisect_left(blocks, x)
            if t == 1:
                if p + 1 < len(blocks):
                    update(blocks[p + 1], blocks[p + 1] - blocks[p - 1])
                del blocks[p]  # No difference if using sorted containers.
            else:
                res.append(x - blocks[p - 1] >= sz[0] or get_max(x) >= sz[0])
        return reversed(res)
```