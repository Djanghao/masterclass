# [Ruby] DP

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/1330545/](https://leetcode.com/problems/decode-ways-ii/solutions/1330545/)

---

```
# @param {String} s
# @return {Integer}
def num_decodings(s)
  return 0 if s[0] == '0'
      
  n = s.length
  dp = [0]*(n + 1)
  dp[0] = 1
  dp[1] = s[0] == '*' ? 9 : 1
  
  (1...n).each do |i|
    if s[i] != '0'
      dp[i+1] += dp[i]*(s[i] == '*' ? 9 : 1)
    end

    if s[i-1] == '1'
      dp[i+1] += dp[i-1]*(s[i] == '*' ? 9 : 1)
    elsif s[i-1] == '2'
      if s[i] == '*'
        dp[i+1] += dp[i-1]*6
      elsif s[i].to_i <= 6
        dp[i+1] += dp[i-1]
      end
    elsif s[i-1] == '*'
      if s[i] == '*'
          dp[i+1] += dp[i-1]*15
      elsif s[i].to_i >= 7
        dp[i+1] += dp[i-1]*1
      else
        dp[i+1] += dp[i-1]*2
      end
    end
      
    dp[i+1] %= 10**9 + 7
  end
  
  dp[n]
end
```