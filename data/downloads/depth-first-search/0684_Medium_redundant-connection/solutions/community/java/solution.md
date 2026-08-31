# JS, Python, Java, C++ | Simple Union-Find Solution w/ Explanation

**Author:** sgallivan
**Votes:** 68
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/1295728/](https://leetcode.com/problems/redundant-connection/solutions/1295728/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

In this problem, the redundant edge will be the one that links together an already-linked graph. To determine whether already-seen segments of the graph have been connected, we can use a simple **union-find** (**UF**) implementation to keep track of the different segments.

With **UF**, we must define two functions: **union** and **find**. The **find** function will **recursively** trace a node's lineage back to its ultimate parent and update its value in the parent array (**par**), providing a shortcut for the next link.

The **union** function merges two segments by assigning the ultimate parent of one segment to another.

We can iterate through **edges** and **find** both vertices of the edge to see if they belong to the same segment. If so, we've located our redundant edge and can **return** it. If not, we should merge the two different segments with **union**.

 - _**Time Complexity: O(N)** where **N** is the length of **edges**_
 - _**Space Complexity: O(N)** for **par** and the recursion stack_

---

#### ***Javascript Code:***

The best result for the code below is **76ms / 41.2MB** (beats 98% / 44%).
```javascript
var findRedundantConnection = function(edges) {
    let par = Array.from({length: edges.length + 1}, (_,i) => i)
    const find = x => x === par[x] ? par[x] : par[x] = find(par[x])
    const union = (x,y) => par[find(y)] = find(x)
    for (let [a,b] of edges)
        if (find(a) === find(b)) return [a,b]
        else union(a,b)
};
```

---

#### ***Python Code:***

The best result for the code below is **44ms / 14.6MB** (beats 99% / 95%).
```python
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        par = [i for i in range(len(edges) + 1)]
        def find(x: int) -> int:
            if x != par[x]: par[x] = find(par[x])
            return par[x]
        def union(x: int, y: int) -> None:
            par[find(y)] = find(x)
        for a,b in edges:
            if find(a) == find(b): return [a,b]
            else: union(a,b)
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 39.2MB** (beats 100% / 70%).
```java
class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        par = new int[edges.length+1];
        for (int i = 0; i < par.length; i++)
            par[i] = i;
        for (int[] e : edges)
            if (find(e[0]) == find(e[1])) return e;
            else union(e[0],e[1]);
        return edges[0];
    }
    private int[] par;
    private int find(int x) {
        if (x != par[x]) par[x] = find(par[x]);
        return par[x];
    }
    private void union(int x, int y) {
        par[find(y)] = find(x);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **4ms / 8.7MB** (beats 98% / 83%).
```c++
class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        par.resize(edges.size()+1);
        for (int i = 0; i < par.size(); i++)
            par[i] = i;
        for (auto& e : edges)
            if (find(e[0]) == find(e[1])) return e;
            else uniun(e[0],e[1]);
        return edges[0];
    }
private:
    vector<int> par;
    int find(int x) {
        if (x != par[x]) par[x] = find(par[x]);
        return par[x];
    }
    void uniun(int x, int y) {
        par[find(y)] = find(x);
    }
};
```