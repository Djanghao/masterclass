# [Java/C++/Python] Priority Queue

**Author:** lee215
**Votes:** 196
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3082106/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3082106/)

---

# **Intuition**
Almost exactly same as
[1383. Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/discuss/539687/JavaC%2B%2BPython-Priority-Queue).
<br>

# **Explanation**
We iterate all pairs `(A[i], B[i])` with `B[i]` from big to small,
We keep the priority queue with maximum size of `k`.
Each time when we introduce a new pair of `(A[i], B[i])`,
the current minimum value on B is `B[i]`
the current sum value on A is `sum(priority queue)`

If the size of queue > k,
we pop the minimum `A[i]`.
also update total `sum -= A[i]`

If the size of queue == k,
we update `res = res = max(res, sum * B[i])`
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public long maxScore(int[] speed, int[] efficiency, int k) {
        int n = speed.length;
        int[][] ess = new int[n][2];
        for (int i = 0; i < n; ++i)
            ess[i] = new int[] {efficiency[i], speed[i]};
        Arrays.sort(ess, (a, b) -> b[0] - a[0]);
        PriorityQueue<Integer> pq = new PriorityQueue<>(k, (a, b) -> a - b);
        long res = 0, sumS = 0;
        for (int[] es : ess) {
            pq.add(es[1]);
            sumS = (sumS + es[1]);
            if (pq.size() > k) sumS -= pq.poll();
            if (pq.size() == k) res = Math.max(res, (sumS * es[0]));
        }
        return res;
    }
```

**C++**
```cpp
    long long maxScore(vector<int>& speed, vector<int>& efficiency, int k) {
        int n = speed.size();
        vector<pair<int, int>> ess(n);
        for (int i = 0; i < n; ++i)
            ess[i] = {efficiency[i], speed[i]};
        sort(rbegin(ess), rend(ess));
        long long sumS = 0, res = 0;
        priority_queue <int, vector<int>, greater<int>> pq; //min heap
        for (auto& [e, s] : ess) {
            pq.emplace(s);
            sumS += s;
            if (pq.size() > k) {
                sumS -= pq.top();
                pq.pop();
            }
            if (pq.size() == k)
                res = max(res, sumS * e);
        }
        return res;
    }
```

**Python**
```py
    def maxScore(self, A, B, k):
        total = res = 0
        h = []
        for a,b in sorted(list(zip(A, B)), key=lambda ab: -ab[1]):
            heappush(h, a)
            total += a
            if len(h) > k:
                total -= heappop(h)
            if len(h) == k:
                res = max(res, total * b)
        return res
```
