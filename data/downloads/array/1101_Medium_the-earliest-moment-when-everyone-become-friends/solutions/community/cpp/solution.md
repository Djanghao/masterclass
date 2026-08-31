# [C++/Python/Java] Using Union-Find Algorithm

**Author:** phanthaiduong22
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/4668454/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/4668454/)

---

# Earliest Moment When Everyone Become Friends
[C++/Python/Java] Using Union-Find Algorithm

# Intuition
- The goal is to find the earliest time when all individuals in a social group are connected, either directly or indirectly through a chain of friendships.
- Since friendship is symmetric and transitive, this problem can be efficiently solved by using the Union-Find algorithm (also known as Disjoint Set Union (DSU)).
- The essence of this approach is to group individuals who are directly or indirectly friends, and track when all individuals belong to a single group.

# Approach
- **Sorting Logs**: First, sort the `logs` by timestamp to process friendships in chronological order.
- **Union-Find Initialization**: Initialize a parent array `par` to keep track of the leader of each person's group. Initially, each person is their own leader.
- **Iterating Through Logs**: For each log entry, use the Union operation to merge groups if the two individuals belong to different groups.
  - **Union Operation**: Connect two individuals by assigning them the same leader. If they already share a leader, no action is needed.
  - **Find Operation**: Retrieve the leader of an individual's group, applying path compression for efficiency.
- **Counting Groups**: Decrease a counter `cnt` every time a successful union operation occurs. Initially, `cnt` is equal to the number of people `n`.
- **Checking for Single Group**: Once `cnt` becomes 1, all individuals are interconnected, and the timestamp of the current log entry is returned as the result.

# Complexity
- Time complexity: $$O(n \\log n)$$
  - Sorting the logs contributes $$O(n \\log n)$$.
  - The Union-Find operations are performed in almost constant time, thanks to path compression and rank-based merging (although not explicitly mentioned, these optimizations are commonly applied in Union-Find implementations).
- Space complexity: $$O(n)$$
  - The parent array `par` and potentially a rank array (if used for optimization, though not shown here) each require $$O(n)$$ space.

# Code

```cpp []
class Solution {
public:
    vector<int> par;
    bool join(int x, int y){
        int p1 = find(x);
        int p2 = find(y);
        if(p1 == p2) return false;
        if(p1 > p2) par[p1] = p2;
        else par[p2] = p1;
        return true;
    }
    int find(int u){
        if(par[u] != u) par[u] = find(par[u]);
        return par[u];
    }
    int earliestAcq(vector<vector<int>>& logs, int n) {
        sort(logs.begin(), logs.end());
        par.resize(n);
        for(int i = 0; i < n; ++i){
            par[i] = i;
        }
        int cnt = n;
        for(auto& log : logs){
            if (join(log[1], log[2])) cnt--;
            if(cnt == 1) return log[0];
        }
        return -1;
    }
};
```

```python []
class Solution:
    def earliestAcq(self, logs, n):
        par = list(range(n))

        def find(u):
            if u != par[u]:
                par[u] = find(par[u])
            return par[u]

        def join(x, y):
            p1, p2 = find(x), find(y)
            if p1 == p2: return False
            if p1 > p2: par[p1] = p2
            else: par[p2] = p1
            return True

        logs.sort()
        for timestamp, x, y in logs:
            if join(x, y): n -= 1
            if n == 1: return timestamp
        return -1
```

```java []
public class Solution {
    private int[] par;

    private int find(int u) {
        if (par[u] != u) par[u] = find(par[u]);
        return par[u];
    }

    private boolean join(int x, int y) {
        int p1 = find(x), p2 = find(y);
        if (p1 == p2) return false;
        if (p1 > p2) par[p1] = p2;
        else par[p2] = p1;
        return true;
    }

    public int earliestAcq(int[][] logs, int n) {
        par = new int[n];
        for (int i = 0; i < n; i++) par[i] = i;
        Arrays.sort(logs, (a, b) -> Integer.compare(a[0], b[0]));
        for (int[] log : logs) {
            if (join(log[1], log[2])) n--;
            if (n == 1) return log[0];
        }
        return -1;
    }
}
```

Please consider upvote. Thank you.