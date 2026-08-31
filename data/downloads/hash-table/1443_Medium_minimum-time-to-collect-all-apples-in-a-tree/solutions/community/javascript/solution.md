# [C++][C#][Java][Javascript] simple map solution, no recursion, bottom-up

**Author:** leonenko
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/623786/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/623786/)

---

If there's an apple for number - travel from the node with apple to the root. So we need a map - child to parent.
Do not travel same path again - mark as `-1` in the map.

**[update] Since they updated test cases and no longer guarantee that edges are sorted, we need to do sorting first, which makes complexity O(NlogN) instead of O(N) Anyways I think it's good to know that there're other ways to solve the problem when certain preconditions're met.**

*Note: this solution is good for when there's no guarantee that edges are "sorted" by level. It looks like they are sorted, so there's event simpler solution by traversing edges from end to start and propogating apples to parents.*

C++
```
int minTime(int n, vector<vector<int>>& edges, vector<bool>& hasApple) {
    unordered_map<int, int> m;
	std::sort(edges.begin(), edges.end());
   for(auto const& edge : edges)  {
        if (m.count(edge[1]) > 0) m[edge[0]] = edge[1];
        else m[edge[1]] = edge[0];
    }
    int result = 0;
    for(int i = 0; i < hasApple.size(); ++i) {
        if (!hasApple[i]) continue;
        int parent = i;
        while(parent != 0 && m[parent] >= 0) {
            auto temp = m[parent];
            m[parent] = -1;
            parent = temp;
            result += 2;
        }
    }
    return result;
}
```


C#
```
public int MinTime(int n, int[][] edges, IList<bool> hasApple) {
    var m = new Dictionary<int, int>();
	edges = edges.OrderBy(x => x[0]).ToArray(); // sort if needed, input used to be sorted
    foreach(var edge in edges)
        if (m.ContainsKey(edge[1]))
            m[edge[0]] = edge[1];
        else 
            m[edge[1]] = edge[0];

    var result = 0;
    for(var i = 0; i < hasApple.Count; ++i) {
        if (!hasApple[i]) continue;
        var p = i;
        while(p != 0 && m[p] >= 0) {
            var temp = m[p];
            m[p] = -1; // mark as visited
            p = temp;
            result += 2;
        }
    }
    return result;
}
```

Java
```
public int minTime(int n, int[][] edges, List<Boolean> hasApple) {
    HashMap<Integer, Integer> m = new HashMap<Integer, Integer>();
	java.util.Arrays.sort(edges, new java.util.Comparator<int[]>() {
        public int compare(int[] a, int[] b) {
            return a[0] - b[0];
        }
    });
    for(int[] edge: edges)
		if (m.containsKey(edge[1]))
            m.put(edge[0], edge[1]);
        else
            m.put(edge[1], edge[0]);

    int result = 0;
    for(int i = 0; i < hasApple.size(); ++i) {
        if (!hasApple.get(i)) continue;
        int p = i;
        while(p != 0 && m.get(p) >= 0) {
            int temp = m.get(p);
            m.put(p, -1); // mark as visited
            p = temp;
            result += 2;
        }
    }
    return result;
}
```

Javascript
```
var minTime = function(n, edges, hasApple) {
    const m = {};
	edges.sort((a,b) => a[0] - b[0]);
    for(let edge of edges) 
        if (m[edge[1]] !== undefined)
            m[edge[0]] = edge[1];
        else
            m[edge[1]] = edge[0];

    let result = 0;
    for(let i = 0; i < hasApple.length; ++i) {
        if (!hasApple[i]) continue;
        let p = i;
        while(p != 0 && m[p] >= 0) {
            const temp = m[p];
            m[p] = -1; // mark as visited
            p = temp;
            result += 2;
        }
    }
    return result;
};
```