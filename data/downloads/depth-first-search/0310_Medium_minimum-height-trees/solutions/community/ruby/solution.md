# Ruby - Short solution with explanation

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/923579/](https://leetcode.com/problems/minimum-height-trees/solutions/923579/)

---

**Note:** There are one or two vertices in a tree graph which have min height.

**Algorithm:**  Exclude all vertices from a graph with one edge (leaves) until only one or two vertices left.

```
def find_min_height_trees(n, edges)
  return [0] if n == 1
  adj = Hash.new { |h, v| h[v] = [] } # store adjacent vertices
  deg = Hash.new(0) # vertex's degree - amount of edges outgoing from the vertex,
                    #                   same as number of adjacent vertices
  edges.each do |a, b|
    adj[a] << b; deg[a] += 1
    adj[b] << a; deg[b] += 1
  end
  leaves = []
  while n > 2
    # exclude vertices with one edge (leaves)
    leaves = deg.select { |_, d| d == 1 }
    n -= leaves.size
    leaves.each do |v, _|
      deg.delete(v)
      adj[v].each { |c| deg[c] -= 1 if deg.key?(c) }
    end
  end
  deg.keys
end
```