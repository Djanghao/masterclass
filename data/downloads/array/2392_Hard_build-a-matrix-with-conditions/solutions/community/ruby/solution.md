# Runtime 400ms Beats100.00% | Memory 219.58MB Beats100.00%

**Author:** amnesia10
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5510980/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5510980/)

---

Thanks to SamoylenkoDmitry
https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5510359/kotlin-rust


```
# @param {Integer} k
# @param {Integer[][]} row_conditions
# @param {Integer[][]} col_conditions
# @return {Integer[][]}
def build_matrix(k, row_conditions, col_conditions)
    topo = ->(cond) {
        in_order = Array.new(k + 1, 0)
        g = Hash.new { |h, k| h[k] = [] }
        cond.each { |a, b| in_order[b] += 1; g[a] << b }
        res = (1..k).select { |v| in_order[v].zero? }
        i = 0
        res.each { |v| in_order[v] = i; i += 1; g[v].each { |it| res.push(it) if (in_order[it] -= 1).zero? } }
        i < k ? [] : in_order
    }
    r, c = topo.(row_conditions), topo.(col_conditions)
    return [] if r.size < 1 || c.size < 1    
    Array.new(k) { Array.new(k) { |v| v = 0 } }.tap { |res| (1..k).each { |v| res[r[v]][c[v]] = v } }
end
```