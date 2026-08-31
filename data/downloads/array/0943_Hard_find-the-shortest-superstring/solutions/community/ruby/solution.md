# [Ruby] DP

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/1226672/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/1226672/)

---

```
# @param {String[]} words
# @return {String}
def shortest_superstring(words)
  n = words.count
  shared = n.times.map{[0]*n}
  n.times do |i|
    n.times do |j|
      [words[i].length, words[j].length].min.downto(0) do |k|
        if words[i][-k..-1] == words[j][0...k]
          shared[i][j] = k
          break
        end
      end
    end
  end
  
  dp = (1<<12).times.map{['']*12}
  (1<<n).times do |i|
    n.times do |k|
      next if i&(1<<k) == 0
      if i == (1<<k)
        dp[i][k] = words[k]
        next
      end

      n.times do |j|
        next if j == k
        if i&(1<<j) > 0
          s = dp[i^(1<<k)][j]
          s += words[k][shared[j][k]..-1]
          if dp[i][k] == '' || s.length < dp[i][k].length
            dp[i][k] = s
          end
        end
      end
    end
  end

  min_len = Float::INFINITY
  result = ''

  n.times do |i|
    s = dp[(1<<n)-1][i]
    if s.length < min_len
      min_len = s.length
      result = s
    end
  end
  
  result
end

```