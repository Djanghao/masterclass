# [Java/C++/Python] Linked List, O(n) Solution

**Author:** lee215
**Votes:** 29
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5586020/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5586020/)

---

# **Intuition**
Inspired by @endlesscheng, who used the union-find,
I realize a simple hashmap/array can help doing this.

The whole problem describes a linked list,
and we can consider a query as a change on linked list,
and we want `O(1)` access on nodes.
<br>

# **Explanation**
We initilize `d[i] = i + 1`,
which means the next node of `i` is `i + 1`.

Then for query `(i, j)`,
we drop the node from `i` to `j`,
then assign a new link `d[i] = j`.

The shortest path from `0` to `n - 1`,
is the length of linked list,
which is the size of hashmap `d`.
<br>

# **Complexity**
Time `O(n + q)`
Space `O(n)`

Because we can drop at most `n - 2` nodes,
the delete operation is at most `O(n)` in total
<br>

**Java**
```java
    public int[] shortestDistanceAfterQueries(int n, int[][] queries) {
        Map<Integer, Integer> d = new HashMap<>();
        for (int i = 0; i < n - 1; ++i) {
            d.put(i, i + 1);
        }
        int res[] = new int[queries.length], qi = 0;
        for (int[] q : queries) {
            int i = q[0], j = q[1];
            if (d.containsKey(i) && d.get(i) < j) {
                int v = i;
                while (v < j && d.containsKey(v)) {
                    v = d.remove(v);
                }
                d.put(i, j);
            }
            res[qi++] = d.size();
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> shortestDistanceAfterQueries(int n, vector<vector<int>>& queries) {
        unordered_map<int, int> d;
        for (int i = 0; i < n - 1; ++i) {
            d[i] = i + 1;
        }
        vector<int> res;
        for (const auto& q : queries) {
            int i = q[0], j = q[1];
            if (d.find(i) != d.end() && d[i] < j) {
                for (int v = i, v2; v < j; v = v2) {
                    v2 = d[v];
                    d.erase(v);
                }
                d[i] = j;
            }
            res.push_back(d.size());
        }
        return res;
    }
```
**Python using Dict**
```py
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        d = {i: i + 1 for i in range(n - 1)}
        res = []
        for i, j in queries:
            if i in d and d[i] < j:
                v = i
                while v < j:
                    v = d.pop(v)
                d[i] = j
            res.append(len(d))
        return res
```

**Python using Array**
```py
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        d = list(range(1, n))
        res = []
        cur = n - 1
        for i, j in queries:
            while d[i] < j:
                d[i], i = j, d[i]
                cur -= 1
            res.append(cur)
        return res
```
