# Ruby - Union Find Kruskal's Algorithm with comments

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/933579/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/933579/)

---

## Rephrase task

Assume we do not have any edges initially: only some set of vertices (numbers from 1 to n). And some set of edges that we can use to make graph traversable by both Alice and Bob. Number of edges in the set minus minimum number of edges to add (to make graph traversable by both Alice and Bob) equals to the initial value we need to calculate.

## Observation

Edges that are traversable by both Alice and Bob should be preoritasable over others edges. But only if any new age does not add a cycle in the graph. At the end we should have `n - 1` edges traversable by Alice and `n - 1` edges traversable by Bob. Some of them may be shared (if can by traversed by both Alice and Bob). So we need from `n - 1`  upto ` 2(n - 1)` edges to make graph traversable by both.

## Algorithm

Split edges by three groups (like in task description). Use `merge` method from Union Find algorithm to to check whether we can add next edge not adding cycles (vertices `u` and `v` should be in different groups). First use up to `n - 1` edges traversed by both Alice and Bob, then use up to `n - 1` edges traversed by Alice, and then use up to `n - 1` edges traversed by Bob. Return number not used edges if we have enough edges for Alice and Bob or `-1` if we ran out of edges.

## Implementation

Ruby version

```ruby
# find with path compression
def find(par, x)
  par[x] == x ? x : (par[x] = find(par, par[x]))
end

def merge(par, x, y)
  x = find(par, x)
  y = find(par, y)
  return false if x == y
  par[x] = y
  return true
end

ALICE = 1
BOB = 2
BOTH = 3

def max_num_edges_to_remove(n, edges)
  res = edges.size # all minus min needed num of edges to make graph traversable
                   # (remaining count after adding all nessasary edges)
  return res if n == 1
  return -1 if edges.size < n - 1 # not enough edges to make graph traversable

  edges_for = edges.group_by(&:first)
  return -1 if edges_for.keys.one? && edges_for.keys[0] != BOTH # not enough edges for Alice or Bob
  
  # Initially, each vertice is in its own single-vertice group where the vertice is the parent of that group.
  par_alice = *0..n
  need_alice = n - 1
  
  edges_for[BOTH]&.each do |_, u, v|
    if merge(par_alice, u, v)
      res -= 1
      need_alice -= 1
      return res if need_alice == 0
    end
  end
  
  par_bob = par_alice.dup
  need_bob = need_alice
  
  edges_for[ALICE]&.each do |_, u, v|
    if merge(par_alice, u, v)
      res -= 1
      need_alice -= 1
      break if need_alice == 0
    end
  end
  return -1 if need_alice > 0
  
  edges_for[BOB]&.each do |_, u, v|
    if merge(par_bob, u, v)
      res -= 1
      need_bob -= 1
      return res if need_bob == 0
    end
  end
  
  return -1
end
# Runtime: 216 ms
```

## Videos for Union Find (by William Fiset):
- [Union Find Introduction](https://www.youtube.com/watch?v=ibjEGG7ylHk)
- [Union Find Kruskal's Algorithm](https://www.youtube.com/watch?v=JZBQLXgSGfs)
- [Union Find - Union and Find Operations](https://www.youtube.com/watch?v=0jNmHPfA_yE)
- [Union Find Path Compression](https://www.youtube.com/watch?v=VHRhJWacxis)
- [Union Find Code](https://www.youtube.com/watch?v=KbFlZYCpONw)

[LeetCode Union Find Problems](https://leetcode.com/tag/union-find/)
