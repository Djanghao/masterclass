# Ruby simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5378752/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5378752/)

---


# Code
```
# @param {Integer[]} vals
# @param {Integer[][]} edges
# @param {Integer} k
# @return {Integer}
def max_star_sum(vals, edges, k) 
  edges.inject(Hash.new{ _1[_2] = []} ) do |h, (i, j)| 
    h[i] << vals[j] if vals[j].positive?
    h[j] << vals[i] if vals[i].positive?
    h
  end.inject(vals.max) { |max, (key, val)| [max, val.sort{_2 <=> _1}[0...k].sum + vals[key]].max }
end 
```