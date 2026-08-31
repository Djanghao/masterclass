# [Ruby] O(n^2)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/1097705/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/1097705/)

---

```
# @param {String} s
# @return {Integer}
def beauty_sum(s)
  n = s.length
  result = 0
  
  n.times do |i|
    dic = Hash.new(0)
    dic[s[i]] += 1
    
    (i+1...n).each do |j|
      dic[s[j]] += 1
      result += dic.values.max - dic.values.min
    end
  end
  
  result
end

```