# [Java/C++/Python] Take the query ending latest

**Author:** lee215
**Votes:** 24
**Link:** [https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075702/](https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075702/)

---

# **Intuition**
Itearte `A`,
if we need more query,
greedily take the available query with biggest ending index.

# **Explanation**
`h` are ending indices of available queries
`cur` are number of queries currently in use.

Iterate each `A[i]`,
popping out all ended query,
update availble queries in `h`.

While valid queries `cur` is smaller than required `A[i]`,
we need to take a query from `h` and add to `cur`.
**the stradgy is popping out the query with biggest ending index.**

Repeat this process and return the number of unused queries.
<br>

# **Complexity**
Time `O(n + qlogq)`
Space `O(q)`
<br>

```Java [Java]
    public int maxRemoval(int[] A, int[][] queries) {
        int n = A.length, nq = queries.length;
        Arrays.sort(queries, (a, b) -> a[0] - b[0]);
        PriorityQueue<Integer> h = new PriorityQueue<>(); // min heap
        int[] end = new int[n + 1];
        int cur = 0, j = 0;
        for (int i = 0; i < n; ++i) {
            cur -= end[i];
            while (j < nq && queries[j][0] <= i) {
                h.offer(-queries[j][1]); // Add negative for min-heap
                j++;
            }
            while (cur < A[i]) {
                if (h.isEmpty() || -h.peek() < i) {
                    return -1;
                }
                end[-h.poll() + 1]++;
                cur++;
            }
        }
        return h.size();
    }
```
```C++ [C++]
    int maxRemoval(vector<int>& A, vector<vector<int>>& queries) {
        int n = A.size(), nq = queries.size();
        sort(queries.begin(), queries.end());
        priority_queue<int> h; // max heap
        vector<int> end(n + 1, 0);
        int cur = 0, j = 0;
        for (int i = 0; i < n; ++i) {
            cur -= end[i];
            while (j < nq && queries[j][0] <= i) {
                h.push(queries[j][1]);
                j++;
            }
            while (cur < A[i]) {
                if (h.empty() || h.top() < i) {
                    return -1;
                }
                end[h.top() + 1]++;
                h.pop();
                cur++;
            }
        }
        return h.size();
    }
```
```py [Python3]
    def maxRemoval(self, A: List[int], queries: List[List[int]]) -> int:
        queries = sorted(queries)[::-1]
        ava = SortedList()
        cur = SortedList()
        for i in range(len(A)):
            while queries and queries[-1][0] <= i:
                ava.add(queries.pop()[1])
            while cur and cur[0] < i:
                cur.pop(0)
            while A[i] > len(cur):
                if not ava or ava[-1] < i:
                    return -1
                cur.add(ava.pop())
        return len(ava)
```