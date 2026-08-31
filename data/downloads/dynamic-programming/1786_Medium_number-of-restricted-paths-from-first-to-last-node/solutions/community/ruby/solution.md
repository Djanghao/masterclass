# [Ruby] Dijkstra + sorting by distance and iterating nodes

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/1101811/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/1101811/)

---


```ruby
def dijkstra(n, edge_list, init)
  verts = *0...n
  dist = Array.new(n, Float::INFINITY)
  dist[init] = 0
  prev = Array.new(n, nil)
  adj = Hash.new { |adj, v| adj[v] = [] }
  edge_list.each do |u, v, w|
    adj[u] << [v, w]
    adj[v] << [u, w]
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
        idx = pq.bsearch_index { |d, _| alt <= d } || pq.size
        pq.insert(idx, [alt, u])
        dist[u] = alt
        prev[u] = v
      end
    end
  end

  # in addition to distances, return adjacents nodes
  return dist, adj
end

MOD = 10**9 + 7
def count_restricted_paths(n, edges)
  edge_list = edges.map { |u, v, w| [u - 1, v - 1, w] }
  dist, adj = dijkstra(n, edge_list, n - 1)
  
  count_paths = Array.new(n, 0)
  count_paths[n - 1] = 1

  (0...n).zip(dist).sort_by(&:last).each.each do |u, _|
    for v, _ in adj[u]
      if dist[u] > dist[v]
        count_paths[u] += count_paths[v]
        count_paths[u] %= MOD
      end
    end
    break if u == 0
  end

  count_paths[0]
end
```