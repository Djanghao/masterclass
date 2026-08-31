# Ruby: T: O(m + n), S: O(mn), 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/2518206/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/2518206/)

---

### 1. Greedy: T O(mn), S O(mn)

Simply loop through cells and take the min of current rowsum and colsum

```
def restore_matrix(row_sum, col_sum)
  m = row_sum.size
  n = col_sum.size

  result = Array.new(m) { Array.new(n) { 0 } }

  0.upto(m - 1) do |i|
    0.upto(n - 1) do |j|
      el = [row_sum[i], col_sum[j]].min
      result[i][j] = el
      row_sum[i] -= el
      col_sum[j] -= el
    end
  end

  result
end
```

### 2. Improved Greedy: T O(m + n), S O(mn)

The idea is that we will fail really fast while doing the greedy algorithm, so for each loop on row sum:
- If the current rowsum is less than current colsum, we will take that rowsum to the result table, then we know that continue the row is meaningless because the min of the rest will be 0 anyway, so we will jump to the next row
- If the current rowsum is no less than current colsum, we will take that colsum to the result table, then we know that for we don't need to compare any other row with that colsum because the min will be 0 anyway

*Because for each loop, we either reduce the colsum number by 1, or reduce the rowsum number by 1 (by jumping to the next row) the time complexity will be O(m + n)*

Please upvote if you find it helpful

```
def restore_matrix(row_sum, col_sum)
  m = row_sum.size
  n = col_sum.size

  result = Array.new(m) { Array.new(n) { 0 } }
  cs_set = Set.new((0..(n - 1)).to_a)

  0.upto(m - 1) do |i|
    rs = row_sum[i]
    cs_set.each do |j|
      cs = col_sum[j]
      if rs > cs
        result[i][j] = cs
        col_sum[j] = 0
        rs -= cs
        cs_set.delete(j)
      else
        result[i][j] = rs
        col_sum[j] -= rs
        break
      end
    end
  end

  result
end