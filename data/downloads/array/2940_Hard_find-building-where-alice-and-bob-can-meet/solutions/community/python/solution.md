# [Java/C++/Python] Priority Queue

**Author:** lee215
**Votes:** 93
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304269/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304269/)

---

# **Explanation**

**Step 1**
For each query `[i,j]`,
if `i < j and A[i] < A[j]`, then Alice and Bob meet at `j`.
if `i > j and A[i] > A[j]`, then Alice and Bob meet at `i`.
if `i == j`, then Alice and Bob already meet at `i`.

**Step 2**
For the remaining queries,
we arrange them by position,
a query `[i,j]` can be answered after index `max(i,j)`,

We will(not now) put a query in a minimum priority queue,
sorted by key `max(A[i], A[j])`,
so we can answer the query with minimum height first.

**Step 3**
Then we iterate heights `A[i]` from left to right,
and check if we can answer any not answered queries.
After we answer all queries we can answer with `A[i]`,
we will push new queries that we can answer from now,
new queries are arranged from step 2.

**Step 4**
Finally return the answer `res`.
<br>

# **Complexity**
Time `O(qlogq)`
Space `O(q)`
where `q = queries.size`
<br>

**Java**
```java
    public int[] leftmostBuildingQueries(int[] A, int[][] queries) {
        int n = A.length, qn = queries.length;
        List<int[]>[] que = new ArrayList[n];
        for (int i = 0; i < n; i++)
            que[i] = new ArrayList();
        PriorityQueue<int[]> h = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        int[] res = new int[qn];
        Arrays.fill(res, -1);
        // Step 1
        for (int qi = 0; qi < qn; qi++) {
            int i = queries[qi][0], j = queries[qi][1];
            if (i < j && A[i] < A[j]) {
                res[qi] = j;
            } else if (i > j && A[i] > A[j]) {
                res[qi] = i;
            } else if (i == j) {
                res[qi] = i;
            } else { // Step 2
                que[Math.max(i, j)].add(new int[]{Math.max(A[i], A[j]), qi});
            }
        }
        // Step 3
        for (int i = 0; i < n; i++) {
            while (!h.isEmpty() && h.peek()[0] < A[i]) {
                res[h.poll()[1]] = i;
            }
            for (int[] q : que[i]) {
                h.add(q);
            }
        }

        return res;
    }
```

**C++**
```cpp
    vector<int> leftmostBuildingQueries(vector<int>& A, vector<vector<int>>& queries) {
        int n = A.size(), qn = queries.size();
        vector<vector<vector<int>>> que(n);
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> h;
        vector<int> res(qn, -1);
        // Step 1
        for (int qi = 0; qi < qn; qi++) {
            int i = queries[qi][0], j = queries[qi][1];
            if (i < j && A[i] < A[j]) {
                res[qi] = j;
            } else if (i > j && A[i] > A[j]) {
                res[qi] = i;
            } else if (i == j) {
                res[qi] = i;
            } else { // Step 2
                que[max(i, j)].push_back({max(A[i], A[j]), qi});
            }
        }
        // Step 3
        for (int i = 0; i < n; i++) {
            while (!h.empty() && h.top()[0] < A[i]) {
                res[h.top()[1]] = i;
                h.pop();
            }
            for (auto& q : que[i]) {
                h.push(q);
            }
        }
        return res;
    }
```

**Python2**
```py
    def leftmostBuildingQueries(self, A, queries):
        que = [[] for a in A]
        h = []
        res = [-1] * len(queries)
        for qi, (i, j) in enumerate(queries):
            if cmp(i, j) == cmp(A[i], A[j]):
                res[qi] = max(i, j)
            else:
                que[max(i, j)].append([max(A[i], A[j]), qi])
        for i, a in enumerate(A):
            while h and h[0][0] < a:
                res[heappop(h)[1]] = i
            for q in que[i]:
                heappush(h, q)
        return res
```
