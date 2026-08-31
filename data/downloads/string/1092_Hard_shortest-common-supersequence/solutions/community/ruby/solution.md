# Ruby

**Author:** piyushsawaria
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/869088/](https://leetcode.com/problems/shortest-common-supersequence/solutions/869088/)

---

```
def shortest_common_supersequence(str1, str2)
  dp = Array.new(str1.size + 1) { Array.new(str2.size + 1) }
  (str1.size + 1).times do |i|
    (str2.size + 1).times do |j|
      if i == 0 || j == 0
        dp[i][j] = 0
      elsif str1[i-1] == str2[j-1]
        dp[i][j] = 1 + dp[i-1][j-1]
      else
        dp[i][j] = [dp[i-1][j], dp[i][j-1]].max
      end
    end
  end
  
  i, j = str1.size, str2.size
  
  s = ""
  while i != 0 && j != 0
    if str1[i-1] == str2[j-1]
      s = str1[i-1] + s
      i -= 1
      j -= 1
    elsif dp[i][j-1] > dp[i-1][j]
      s = str2[j-1] + s
      j -= 1
    else
      s = str1[i-1] + s
      i -= 1
    end
  end
  
  while i > 0
    s = str1[i-1] + s
    i -= 1
  end
  while j > 0
    s = str2[j-1] + s
    j -= 1
  end
  s
end
