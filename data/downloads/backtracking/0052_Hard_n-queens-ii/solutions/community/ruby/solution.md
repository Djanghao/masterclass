# Ruby, Backtrack, Lambda

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/5461471/](https://leetcode.com/problems/n-queens-ii/solutions/5461471/)

---

# Code
```
def total_n_queens(n)
  visited_columns = Set.new
  visited_diagonal_increase = Set.new
  visited_diagonal_decrease = Set.new

  backtrack = lambda do |row|
    return 1 if row == n

    results = 0
    (0...n).each do |column|
      next if visited_columns.include?(column)
      next if visited_diagonal_increase.include?(row + column)
      next if visited_diagonal_decrease.include?(row - column)

      visited_columns.add(column)
      visited_diagonal_increase.add(row + column)
      visited_diagonal_decrease.add(row - column)

      results += backtrack.call(row + 1)

      visited_columns.delete(column)
      visited_diagonal_increase.delete(row + column)
      visited_diagonal_decrease.delete(row - column)
    end
    results
  end

  backtrack.call(0)
end
```