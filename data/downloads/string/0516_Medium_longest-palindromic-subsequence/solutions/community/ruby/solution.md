# Ruby solution using DP (Memoization)

**Author:** divyad25
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/600127/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/600127/)

---

```
def longest_palindrome_subseq(s)
  @str = s
  @dp = []
  max_len(0, s.length-1)
end

def max_len(i, j)
  return 0 if i > j
  return 1 if i == j
  return @dp[i][j] if @dp[i] && @dp[i][j]
  @dp[i] ||= []
  @dp[i][j] = ((@str[i] == @str[j]) ? max_len(i+1, j-1)+2 : [max_len(i+1, j), max_len(i, j-1)].max)
end
```