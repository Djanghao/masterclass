# Ruby - T: O(n) S: O(n) - Bidirectional BFS. Faster than 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/2448586/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/2448586/)

---

```
# @param {Integer} n
# @param {Integer[][]} edges
# @param {Integer} source
# @param {Integer} destination
# @return {Boolean}
def valid_path(n, edges, source, destination)
  return true if source == destination

  Graph.new(n, edges).solve(source, destination)
end

class Graph
  attr_reader :adj, :visited, :queue1, :queue2

  def initialize(n, edges)
    @adj = Array.new(n) { [] }
    edges.each do |(x, y)|
      adj[x] << y
      adj[y] << x
    end
    @queue1 = []
    @queue2 = []
  end

  def solve(source, destination)
    @visited = { source => 0, destination => 1 }
    while source && destination
      source = explore(source, 0, 1, queue1)
      return true if source == -1
      destination = explore(destination, 1, 0, queue2)
      return true if destination == -1
    end

    false
  end

  def explore(node, current_label, next_label, queue)
    adj[node].each do |next_node|
      return -1 if visited[next_node] == next_label
      next if visited[next_node]
      visited[next_node] = current_label
      queue << next_node
    end

    queue.shift
  end
end