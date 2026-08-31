# Tricky BIT

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5319862/](https://leetcode.com/problems/peaks-in-array/solutions/5319862/)

---

The base problem here is range queries on a mutating array.

We can use a logarithmic data structure to do it fast, such as Fenwick (AKA BIT) or Segment Trees.

We use BIT here as it is faster and works for prefix sum queries.

Now, handling peaks is a bit tricky:
- If our query interval starts or ends at a peak, we need to exclude that peak(s).
	- This is because our interval does not cover peak(s) completely.
	- To account for this, we query the prefix sum for the  [l + 1, r - 1] interval. 
- Updating a value can affect peaks on the left and right:
	- We first check whether n[i -1], n[i] and n[i + 1] are peaks.
	- Then, we change n[i] to `val`.
	- Finally, we check whether a peak was removed or added for any of these positions, and update BIT.

**Python**
```python
class Solution:
    def countOfPeaks(self, n: List[int], queries: List[List[int]]) -> List[int]:
        bit, res = [0] * (len(n) + 1), []
        def bit_range(p, down=True):
            while p >= 0 and p < len(bit):
                yield p
                p = (p & (p + 1)) - 1 if down else p | (p + 1)        
        def p_sum(p: int) -> int:
            return sum(bit[i] for i in bit_range(p))
        def add(p, val):
            for idx in bit_range(p, False):
                 bit[idx] += val;
        def is_peak(i: int):
            return i > 0 and i + 1 < len(n) and n[i - 1] < n[i] and n[i] > n[i + 1]
        for i in range(1, len(n) - 1):
            if is_peak(i):
                add(i, 1)
        for q in queries:
            match q:
                case [1, l, r]:
                    res.append(p_sum(r - 1) - p_sum(l) if l < r else 0)
                case [2, i, val]:
                    prev = [is_peak(i - 1), is_peak(i), is_peak(i + 1)]
                    n[i] = val
                    for p, before in enumerate(prev):
                        if before != is_peak(i + p - 1):
                            add(i + p - 1, -1 if before else 1)                    
        return res
```
**C++**
```cpp
constexpr int static n = 100000;
int bt[n + 1] = {};
int psum(int i) {
    int sum = 0;
    for (i = i + 1; i > 0; i -= i & (-i))
        sum += bt[i];
    return sum;
}
void add(int i, int val) {
    for (i = i + 1; i <= n; i += i & (-i))
        bt[i] += val;
}
vector<int> countOfPeaks(vector<int>& n, vector<vector<int>>& queries) {
    auto isPeak = [&](int i){
        return i > 0 && i + 1 < n.size() && n[i - 1] < n[i] && n[i] > n[i + 1];
    };
    for (int i = 1; i + 1 < n.size(); ++i)
        if (isPeak(i))
            add(i, 1);
    vector<int> res;
    for (const auto &q : queries)
        if (q[0] == 1)
            res.push_back(q[1] < q[2] ? psum(q[2] - 1) - psum(q[1]) : 0);
        else {            
            int i = q[1], prev[3] = {isPeak(i - 1), isPeak(i), isPeak(i + 1)};
            n[i] = q[2];
            for (int p = 0, j = i - 1; j < i + 2; ++j, ++p)
                if (prev[p] != isPeak(j))
                    add(j, prev[p] ? -1 : 1);
        }
    return res;
}
```