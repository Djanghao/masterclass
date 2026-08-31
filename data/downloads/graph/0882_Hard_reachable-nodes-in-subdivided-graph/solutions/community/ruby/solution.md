# Ruby - Dijkstra

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459955/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459955/)

---

Get distances to all nodes from node `0` using Dijkstra algorithm. Where weight between nodes equeals `cnt + 1`.
Then calculate result as count of nodes reachable in not greater than `max_moves` moves plus count of reachable additional nodes for each edge.

```ruby
def reachable_nodes(edges, max_moves, n)
  dist = dijkstra(n, edges, 0)
  res = dist.count { _1 <= max_moves }
  edges.each do |u, v, cnt|
    uc = [max_moves - dist[u], 0].max # reachable nodes from "left"
    vc = [max_moves - dist[v], 0].max # reachable nodes from "right"
    res += [uc + vc, cnt].min
  end
  res
end

def dijkstra(n, edge_list, init)
  dist = Array.new(n, Float::INFINITY)
  dist[init] = 0
  adj = Hash.new { |adj, v| adj[v] = [] }
  edge_list.each do |u, v, w|
    adj[u] << [v, w + 1]
    adj[v] << [u, w + 1]
  end
  pq = [[0, init]] # priority queue
  visited = Set.new

  while pq.any?
    dist_v, v = pq.shift
    next if dist[v] < dist_v
    visited.add(v)
    adj[v].each do |u, w|
      next if visited.include?(u)
      alt = dist[v] + w
      if alt < dist[u]
        idx = pq.bsearch_index { |d, v| alt < d } || pq.size
        pq.insert(idx, [alt, u])
        dist[u] = alt
      end
    end
  end

  dist
end
```