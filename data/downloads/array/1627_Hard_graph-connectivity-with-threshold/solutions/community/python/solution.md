# Ruby/Python - Union Find with explanation. Short code.

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/933034/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/933034/)

---

## Edge cases

If `threshold` is 0 then all pairs of numbers share acceptable divisor `1` and those are directly connected.
If `threshold >= n / 2` then there are no connected nodes in the graph.

## Example

`n  = 633, threshold = 70`
Numbers `72, 144, 216, ...` share common divisor `72` and are directly connected (group #1).
Numbers `81, 162, 243, 324, ...` share common divisor `81` and are directly connected (group #2).
Numbers `108, 216, 324, ... ` share common divisor `108` and are directly connected (group #3).

We can notice that number `216` is present in group #1 and #3, also number `324` is present in group #2 and #3.
Thats why all provided groups of numbers are connected.

## Algorithm

Iterate over all possible divisors from `threshold + 1` to `n/2` and unite numbers that share common divisor in a single group. All group's elements share a single parent between all numbers in the group (a group has one parent element).
If a number is divisible by multiple divisors we unite groups produced by thouse divisors.

## Minor Optimisation (not necessary)

As an optimisation we use smaller parent betweet two to be a common parent for two groups when combine/unite two groups (smaller parent/divisor has larger group of its own multiples). Maybe it doesn't not worth it.

## Union Find

Union Find - is a commonly used algorithm, that basically has two operations:
 - **find** - find group indicator for an element. Group ID can be a parent element or may be a group color.
`find` uses path compression to combine all group elements directly to group's parent along the way. 
- **union** - combine two groups. Choose one parent (e.g. from the first group) to be the parent for both groups: connect the second to the first parent. All elements of the second group will be connected through the old parent element to the new parent. And after applying `find` operation on them after path compression they will be connebted directly to the new parent.

Ruby version:
 
```ruby
# find with path compression
def find(par, x)
  par[x] == x ? x : (par[x] = find(par, par[x]))
end

def are_connected(n, threshold, queries)
  return queries.map { true } if threshold == 0
  return queries.map { false } if threshold >= n / 2
  # Initially, each element is in its own single-element group where the element is the parent of that group.
  par = *0..n
  for d in threshold+1..n/2
    next if par[d] != d # d already merged to other group (d has smaller divisor)
    p1 = par[d]
    (2*d..n).step(d).each do |k| # k = 2*d, 3*d, ...
      p2 = find(par, k)
      next if p1 == p2
      p1, p2 = p2, p1 if p1 > p2 # choose the smallest parent as parent for both groups (not necessary)
      par[p2] = p1  # merge groups to single parent
    end
  end
  queries.map { |x, y| find(par, x) == find(par, y) }
end
# Runtime: 200 ms
```

Compact version (do not choose smallest parrent):

```ruby
def find(par, x)
  par[x] == x ? x : (par[x] = find(par, par[x]))
end

def are_connected(n, threshold, queries)
  return queries.map { true } if threshold == 0
  return queries.map { false } if threshold >= n / 2
  par = *0..n
  for d in threshold+1..n/2
    next if par[d] != d
    (2*d..n).step(d).each do |k|
      p2 = find(par, k)
      par[p2] = d
    end
  end
  queries.map { |x, y| find(par, x) == find(par, y) }
end
# Runtime: 188 ms
```

Python version:

```python
# find with path compression
def find(par, x):
    if par[x] == x:
        return x
    par[x] = find(par, par[x])
    return par[x]

class Solution:
    def areConnected(self, n: int, threshold: int, queries: List[List[int]]) -> List[bool]:
        if threshold == 0: return [True] * len(queries)
        if threshold >= n / 2: return [False] * len(queries)
		# Initially, each element is in its own single-element group where the element is the parent of that group.
        par = list(range(0, n + 1))
        for d in range(threshold + 1, n//2 + 1):
		    # d already merged to other group (d has smaller divisor)
            if par[d] != d:
                continue
            p1 = par[d]
            for k in range(2*d, n + 1, d): # k = 2*d, 3*d, ...
                p2 = find(par, k)
                if p1 == p2:
                    continue
                if p1 > p2:
                    p1, p2 = p2, p1 # choose the smallest parent as parent for both groups (not necessary)
                par[p2] = p1 # merge groups to single parent

        return [find(par, x) == find(par, y) for x, y in queries]
# Runtime: 808 ms
```

## Videos for Union Find (by William Fiset):
- [Union Find Introduction](https://www.youtube.com/watch?v=ibjEGG7ylHk)
- [Union Find Kruskal's Algorithm](https://www.youtube.com/watch?v=JZBQLXgSGfs)
- [Union Find - Union and Find Operations](https://www.youtube.com/watch?v=0jNmHPfA_yE)
- [Union Find Path Compression](https://www.youtube.com/watch?v=VHRhJWacxis)
- [Union Find Code](https://www.youtube.com/watch?v=KbFlZYCpONw)

[LeetCode Union Find Problems](https://leetcode.com/tag/union-find/)