# Ruby T: O(m + n + p), S: O(m + n), 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/2362782/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/2362782/)

---

```
# @param {Integer} m
# @param {Integer} n
# @param {Integer[][]} indices
# @return {Integer}
def odd_cells(m, n, indices)
  rows = Array.new(m) { 0 } # S: O(m)
  cols = Array.new(n) { 0 } # S: O(n)

  # T: O(indices.length)
  indices.each do |(i, j)|
    rows[i] ^= 1
    cols[j] ^= 1
  end

  # T: O(m)
  col_odds = cols.count(1)
  # T: O(n)
  row_odds = rows.count(1)

  # T: O(1)
  row_odds * (n - col_odds) +  col_odds * (m - row_odds)
end