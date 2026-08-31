# [C++|Java|Python3] DFS

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4122130/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4122130/)

---

C++
```
class Solution {
public:
    int maxKDivisibleComponents(int n, vector<vector<int>>& edges, vector<int>& values, int k) {
        vector<vector<int>> tree(n); 
        for (auto& e : edges) {
            tree[e[0]].push_back(e[1]); 
            tree[e[1]].push_back(e[0]); 
        }
        
        function<long(int, int)> fn = [&](int u, int p) {
            for (auto& v : tree[u]) 
                if (v != p) values[u] = (values[u] + fn(v, u)) % k; 
            return values[u]; 
        }; 
        
        fn(0, -1); 
        return count_if(values.begin(), values.end(), [&](auto& x) { return x % k == 0; }); 
    }
};
```
Java
```
class Solution {
    
    private long fn(int u, int p, List<Integer>[] tree, int[] values, int k) {
        for (var v : tree[u]) 
            if (v != p) values[u] = (int) ((values[u] + fn(v, u, tree, values, k)) % k); 
        return values[u]; 
    }
    
    public int maxKDivisibleComponents(int n, int[][] edges, int[] values, int k) {
        List<Integer>[] tree = new ArrayList[n]; 
        Arrays.setAll(tree, x -> new ArrayList()); 
        for (var e : edges) {
            tree[e[0]].add(e[1]); 
            tree[e[1]].add(e[0]); 
        }
        fn(0, -1, tree, values, k); 
        return (int) IntStream.of(values).filter(x -> x % k == 0).count(); 
    }
}
```
Python3
```
class Solution:
    def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
        tree = [[] for _ in range(n)]
        for u, v in edges: 
            tree[u].append(v)
            tree[v].append(u)
        
        def fn(u, p): 
            """Return sum of node values in subtree."""
            for v in tree[u]: 
                if v != p: values[u] += fn(v, u)
            return values[u]
        
        fn(0, -1)
        return sum(x % k == 0 for x in values)

```