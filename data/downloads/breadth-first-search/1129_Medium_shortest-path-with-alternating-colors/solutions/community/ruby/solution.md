# Ruby solution - BFS twice

**Author:** koujiokada
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170437/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170437/)

---

```
RED = 0
BLUE = 1

def bfs(neighbors, n, start_color)
  queue = [0]
  answers = [-1] * n
  hop_count = 0
  visited = Array.new(2) {{}}
  until queue.empty?
    queue.size.times {
      color = (hop_count+start_color) % 2
      node = queue.shift
      next if visited[color][node]
      visited[color][node] = true
      answers[node] = hop_count if answers[node] == -1
      queue += neighbors[color][node]
    }
    hop_count += 1
  end
  answers
end

def shortest_alternating_paths(n, red_edges, blue_edges)
  neighbors = Array.new(2) {Hash.new{|h, k| h[k] = []}}
  red_edges.each {|from, to|
    neighbors[RED][from] << to
  }
  blue_edges.each {|from, to|
    neighbors[BLUE][from] << to
  }
  answers1 = bfs(neighbors, n, RED)
  answers2 = bfs(neighbors, n, BLUE)
  answers1.zip(answers2).map {|hops|
    hops.select{|hop| hop != -1}.min || -1
  }
end
```