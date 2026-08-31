# [Java/Python 3] DFS w/ brief explanation and analysis.

**Author:** rock
**Votes:** 125
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/743133/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/743133/)

---

The problem does NOT specify it is binary tree or not, so I treat it as a general tree.
1. Build the graph of the tree;
2. Use a HashSet `seen` to avoid duplicate visits, `ans` is the result array, and `cnt[i]` is the total number of corresponding char;
3. Use DFS to traverse the tree and count each label and sum it in the return array; At the same time update the result: `ans` array.

```java
    public int[] countSubTrees(int n, int[][] edges, String labels) {
        Map<Integer, List<Integer>> g = new HashMap<>();
        for (int[] e : edges) {
            g.computeIfAbsent(e[0], l -> new ArrayList<>()).add(e[1]);
            g.computeIfAbsent(e[1], l -> new ArrayList<>()).add(e[0]);
        }
        int[] ans = new int[n];
        Set<Integer> seen = new HashSet<>();
        dfs(g, 0, labels, ans, seen);
        return ans;
    }
    private int[] dfs(Map<Integer, List<Integer>> g, int node, String labels, int[] ans, Set<Integer> seen) {
        int[] cnt = new int[26];
        if (seen.add(node)) {
            char c = labels.charAt(node);
            for (int child : g.getOrDefault(node, Collections.emptyList())) {
                int[] sub = dfs(g, child, labels, ans, seen);
                for (int i = 0; i < 26; ++i) {
                    cnt[i] += sub[i];
                }
            }
            ++cnt[c - 'a'];
            ans[node] = cnt[c - 'a'];
        }
        return cnt;
    }
```
```python
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        
        def dfs(node: int):
            cnt = Counter()
            if node not in seen:
                cnt[labels[node]] += 1 
                seen.add(node)
                for child in g.get(node, []):
                    cnt += dfs(child)
                ans[node] = cnt[labels[node]]
            return cnt
        
        g, ans, seen = defaultdict(list), [0] * n, set()
        for a, b in edges:
            g[a] += [b]
            g[b] += [a]
        dfs(0)
        return ans
```

----
Since it is a tree, we can avoid duplicate visiting by checking if  its neighbor is its parent; Therefore, the following code is simplified by removal of set `seen`. - credit to **@jaazzz**.
```java
    public int[] countSubTrees(int n, int[][] edges, String labels) {
        Map<Integer, List<Integer>> g = new HashMap<>();
        for (int[] e : edges) {
            g.computeIfAbsent(e[0], l -> new ArrayList<>()).add(e[1]);
            g.computeIfAbsent(e[1], l -> new ArrayList<>()).add(e[0]);
        }
        int[] ans = new int[n];
        dfs(g, 0, -1, labels, ans);
        return ans;
    }
    private int[] dfs(Map<Integer, List<Integer>> g, int node, int parent, String labels, int[] ans) {
        int[] cnt = new int[26];
        char c = labels.charAt(node);
        for (int child : g.getOrDefault(node, Collections.emptyList())) {
            if (child != parent) {
                int[] sub = dfs(g, child, node, labels, ans);
                for (int i = 0; i < 26; ++i) {
                    cnt[i] += sub[i];
                }
            }
        }
        ++cnt[c - 'a'];
        ans[node] = cnt[c - 'a'];
        return cnt;
    }
```
```python
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        
        def dfs(node: int, parent: int):
            cnt = Counter(labels[node])
            for child in g.get(node, []):
                if child != parent:
                    cnt += dfs(child, node)
            ans[node] = cnt[labels[node]]
            return cnt
        
        g, ans = defaultdict(list), [0] * n
        for a, b in edges:
            g[a] += [b]
            g[b] += [a]
        dfs(0, -1)
        return ans    
```
**Analysis:**

Time & space: `O(n)`.
