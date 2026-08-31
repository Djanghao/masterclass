# [Ruby] DP

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/1215312/](https://leetcode.com/problems/longest-string-chain/solutions/1215312/)

---

```
def longest_str_chain(words)
  dp = {}
  
  words.sort_by{|word| word.length}.each do |word|
    temp = [0]
    word.length.times do |i|
      if dp[word[0...i] + word[i+1..-1]]
        temp << dp[word[0...i] + word[i+1..-1]]
      end
      dp[word] = temp.max + 1
    end
  end
  
  dp.values.max
end

```