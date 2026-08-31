# [Java/C++/Python] DFS on Tree

**Author:** lee215
**Votes:** 228
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/1955433/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/1955433/)

---

# **Intuition**
Classic dfs problem on the tree.
<br>

# **Explanation**
`dfs(i)` return the the longest path starting at the node `i`.

`dfs` on each node `i`, and for each node `i`,
we iterate on all its children, 
and find all the path startint at the node `i`.
The 2 longest path can make up the longest path in subtree of node `i`,
we update the global result `res`,
and return the longest path length as result for `dfs`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    int res;
    public int longestPath(int[] parent, String s) {
        res = 0;
        ArrayList<Integer>[] children = new ArrayList[parent.length];
        for (int i = 0; i < parent.length; i++)
            children[i] = new ArrayList<>();
        for (int i = 1; i < parent.length; i++)
            children[parent[i]].add(i);
        dfs(children, s, 0);
        return res;
    }

    private int dfs(ArrayList<Integer>[] children, String s, int i) {
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        for (int j : children[i]) {
            int cur = dfs(children, s, j);
            if (s.charAt(j) != s.charAt(i))
                queue.offer(-cur);
        }
        int big1 = queue.isEmpty() ? 0 : -queue.poll();
        int big2 = queue.isEmpty() ? 0 : -queue.poll();
        res = Math.max(res, big1 + big2 + 1);
        return big1 + 1;
    }
```
**C++**
```cpp
    int longestPath(vector<int>& parent, string s) {
        int n = s.size(), res = 0;
        vector<vector<int>> children(n, vector<int>());
        for (int i = 1; i < n; ++i)
            children[parent[i]].push_back(i);
        dfs(children, s, res, 0);
        return res;
    }

    int dfs(vector<vector<int>>& children, string& s, int& res, int i) {
        int big1 = 0, big2 = 0;
        for (int& j : children[i]) {
            int cur = dfs(children, s, res, j);
            if (s[i] == s[j]) continue;
            if (cur > big2) big2 = cur;
            if (big2 > big1) swap(big1, big2);
        }
        res = max(res, big1 + big2 + 1);
        return big1 + 1;
    }
```
**Python3**
```py
    def longestPath(self, parent, s):
        children = [[] for i in range(len(s))]
        for i,j in enumerate(parent):
            if j >= 0:
                children[j].append(i)
        
        res = [0]
        def dfs(i):
            candi = [0]
            for j in children[i]:
                cur = dfs(j)
                if s[i] != s[j]:
                    candi.append(cur)
                    
            candi = nlargest(2, candi)
            res[0] = max(res[0], sum(candi) + 1)
            return max(candi) + 1
        
        dfs(0)
        return res[0]
```
