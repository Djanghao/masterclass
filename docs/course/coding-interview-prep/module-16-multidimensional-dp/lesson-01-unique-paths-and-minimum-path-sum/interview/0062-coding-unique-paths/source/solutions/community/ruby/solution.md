# Ruby DP solution with explanation

**Author:** piyushsawaria
**Votes:** 4
**Link:** [https://leetcode.com/problems/unique-paths/solutions/860565/](https://leetcode.com/problems/unique-paths/solutions/860565/)

---

Number of ways robot can go to any cell is given below, which is sum of cell just above and left of it. i.e dp[i][j] = dp[i-1][j] + dp[i][j-1]
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 1 | 3 | 6 | 10| 15| 21| 28|

```
def unique_paths(m, n)
    dp = Array.new(m) { Array.new(n) }
    m.times do |i|
        n.times do |j|
            if i == 0 || j == 0
                dp[i][j] = 1
            else
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            end
        end
    end
    dp[-1][-1]
end

