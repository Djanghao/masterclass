# Ruby 1-line solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/5562349/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/5562349/)

---


# Code
```
# @param {Integer[]} edges
# @return {Integer}
def edge_score(edges) =
  edges.each_with_object(Hash.new(0)).with_index { |(n, s), i| s[n] += i }.sort_by{ [_2, -_1]}.last.first    
```