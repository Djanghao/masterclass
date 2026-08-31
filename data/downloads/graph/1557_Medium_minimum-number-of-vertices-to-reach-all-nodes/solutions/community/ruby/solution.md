# Ruby: zero indegree nodes by simple array difference

**Author:** lacrosse
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536283/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536283/)

---

# Code
```ruby
def find_smallest_set_of_vertices(_, edges) =
  edges.transpose.reduce(:-).uniq
```

# Time complexity

$$\\mathcal{O}(|\	ext{edges}|)$$

# Space complexity

$$\\mathcal{O}(|\	ext{edges}|)$$