# [Java/C++/Python] Stack Solution, No DFS No Topo

**Author:** lee215
**Votes:** 65
**Link:** [https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4112091/](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4112091/)

---

# **Explanation**
For each node,
check it's next nodes.

We push all nodes in a stack,
until a node we have seen,
and pop nodes from stack one by one and assign it's result.

If we meet a node `j` in `seen` set,
it means we hit a cycle.
Calculate the position `j` in the stack,
we can know the length `k` of cycle,
then assign `k` to all nodes in the cycle.

For other nodes in stack,
we pop out one by one,
and we can have `res[j] = res[edges[j]] + 1`

Finally return `res`.

No special skill,
no count of degrees,
no topo sort,
no recursive dfs.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>


**Java**
```java
    public int[] countVisitedNodes(List<Integer> edges) {
        int n = edges.size(), res[] = new int[n], j = 0;
        for (int i = 0; i < n; j = ++i) {
            Set<Integer> seen = new HashSet<>();
            Stack<Integer> s = new Stack<>();
            while (!seen.contains(j) && res[j] == 0) {
                seen.add(j);
                s.push(j);
                j = edges.get(j);
            }
            if (seen.contains(j)) { // hit the cycle
                int k = s.size() - s.indexOf(j);
                for (j = 0; j < k; ++j) {
                    res[s.pop()] = k;
                }
            }
            while (!s.isEmpty()) {
                j = s.pop();
                res[j] = res[edges.get(j)] + 1;
            }
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> countVisitedNodes(vector<int>& edges) {
        int n = edges.size();
        vector<int> res(n);
        for (int i = 0, j = 0; i < n; j = ++i) {
            unordered_set<int> seen;
            vector<int> s;
            while (!seen.count(j) && res[j] == 0) {
                seen.insert(j);
                s.push_back(j);
                j = edges[j];
            }
            if (seen.count(j)) { // hit the cycle
                int k = distance(find(s.begin(), s.end(), j), s.end());
                for (j = 0; j < k; ++j) {
                    res[s.back()] = k;
                    s.pop_back();
                }
            }
            while (!s.empty()) {
                j = s.back();
                s.pop_back();
                res[j] = res[edges[j]] + 1;
            }
        }
        return res;
    }
```

**Python**
```py
    def countVisitedNodes(self, edges: List[int]) -> List[int]:
        n = len(edges)
        res = [0] * n

        for i in range(n):
            seen = OrderedDict()
            j = i
            while (j not in seen) and (res[j] == 0):
                seen[j] = len(seen)
                j = edges[j]
            if j in seen:
                k = len(seen) - seen[j]
                for _ in range(k):
                    res[seen.popitem()[0]] = k
            while seen:
                j = seen.popitem()[0]
                res[j] = res[edges[j]] + 1
        return res
```
