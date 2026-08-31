# Ruby - Try all combinations of edges, with explanation

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/889916/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/889916/)

---

**Solution**

1) Iterate over all possible combination of edges (except no edges) to get a subgraph.
2) Ignore if subgraph is not a valid subtree (if not a tree).
3) Calculate subtree's diameter (maximum distance between any two cities) and count it for final result.

**2) Check if subgraph is a tree**

Tree -- connected graph without cycles.
To check that a subgraph of a tree is also a tree, it suffices to check that the number of vertices in the subgraph is one more than the number of edges in the subgraph.

**3) Tree's Diameter**

Algorithm to find the diameter of a tree:  -- https://codeforces.com/blog/entry/60440
1) Choose a random node s and find the farthest node u from s.
2) Find the farthest node v from u.
3) d(u,v) is the diameter.

```
require 'set'

# maximum distance between any two cities
def diameter(vertices, edges)
  conn = edges.each_with_object(Hash.new { |h, v| h[v] = [] }) { |(x, y), c| c[x] << y; c[y] << x }
  # Choose a random node s and find the farthest node u from s.
  s = vertices.first
  frs, u,  visited = [s], s, Set[s] # frs -- farthest nodes from s, u is one of them.
  loop do
    frs = frs.each_with_object([]) { |x, f| conn[x].each { |y| f << y && visited.add(y) unless visited.include?(y) } }
    frs.empty? ? break : u = frs.last
  end
  # Find the farthest node v from u (implicitly). d(u,v) is the diameter.
  frs, dim, visited = [u], 0, Set[u] # frs -- farthest nodes from u, dim -- diameter.
  loop do
    frs = frs.each_with_object([]) { |x, f| conn[x].each { |y| f << y && visited.add(y) unless visited.include?(y) } }
    frs.empty? ? break : dim += 1
  end
  dim
end

def count_subgraphs_for_each_diameter(n, edges)
  d = [0] * (n - 1)
  (1..edges.size).each do |k|
    edges.combination(k).each do |egs|
      vertices = egs.each_with_object(Set.new) { |(x, y), vs| vs.add(x); vs.add(y) }
      next unless vertices.size == egs.size + 1 # check if it's a tree
      diam = diameter(vertices, egs)
      d[diam - 1] += 1
    end
  end
  return d
end
```