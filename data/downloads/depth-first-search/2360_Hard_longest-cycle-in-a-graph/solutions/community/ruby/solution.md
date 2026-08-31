# Ruby: DFS

**Author:** lacrosse
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3341719/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3341719/)

---

# Code
```ruby
def longest_cycle(edges)
  max = -1

  edges.size.times { |cur|
    next if edges[cur] < 0
    dists = {}
    dist = 0
    until cur < 0
      if dists[cur]
        cycle = dist - dists[cur]
        max = cycle if cycle > max
        break
      else
        dists[cur] = dist
        cur, edges[cur] = edges[cur], -1
        dist += 1
      end
    end
  }
  
  max
end
```

# Time complexity

$$\\mathcal{O}(|\	ext{edges}|)$$

# Space complexity

$$\\mathcal{O}(|\	ext{edges}|)$$