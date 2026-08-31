# Two solutions - Disjoint Sets & DFS | Ruby

**Author:** piyushsawaria
**Votes:** 4
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/1040651/](https://leetcode.com/problems/redundant-connection/solutions/1040651/)

---

```
Union find
def find_redundant_connection(edges)
  @parent = Array.new(edges.size + 1, -1)
  edges.each do |u, v|
    return [u, v] if union(u, v)
  end
end

def union(u, v)
  p1 = find(u)
  p2 = find(v)
  @parent[p2] = p1
  p1 == p2
end

def find(x)
  return x if @parent[x] == -1
  @parent[x] = find(@parent[x])
  @parent[x]
end

```

```
DFS
def find_redundant_connection(edges)
  @graph = {}
  edges.each do |u, v|
    return [u, v] if dfs(u, v, Set.new)
    
    @graph[u] = @graph[u] ? @graph[u].push(v) : [v]
    @graph[v] = @graph[v] ? @graph[v].push(u) : [u]
  end
end

def dfs(u, v, visited)
  visited.add(u)
  if @graph[u]
    return true if @graph[u].include?(v)
    @graph[u].each do |neighbour|
      unless visited.include?(neighbour)
        visited.add(neighbour)
        return true if dfs(neighbour, v, visited)
      end
    end
  end
  false
end