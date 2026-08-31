# Ruby O(n^3)

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/2004304/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/2004304/)

---

```
def min_trio_degree(n, edges)
    adjacency_matrix = Array.new(n+1) {Array.new(n+1, false)}
    indegree = [0]*(n+1)
    edges.each do |u,v|
        adjacency_matrix[u][v] = adjacency_matrix[v][u] = true
        indegree[u]+=1
        indegree[v]+=1
    end
    res = 1.0/0
    for i in 1..n
        for j in (i+1)..(n-1)
            next unless adjacency_matrix[i][j]
            for k in (j+1)..n
                res = [res, indegree[i]+indegree[j]+indegree[k]-6].min if adjacency_matrix[i][k] && adjacency_matrix[j][k]
            end
        end
    end
    res == 1.0/0 ? -1 : res
end
```