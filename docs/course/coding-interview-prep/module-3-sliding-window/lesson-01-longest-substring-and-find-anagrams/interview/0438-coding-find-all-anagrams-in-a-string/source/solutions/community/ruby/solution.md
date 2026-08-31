# Ruby Sliding window O(n)

**Author:** piyushsawaria
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/982117/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/982117/)

---

once window size is reached restore window.
```
def find_anagrams(s, p)
  p_hash = Hash.new(0)
  p.each_char { |c| p_hash[c] += 1 }
  
  i, j = 0, 0
  res = []
  
  while j < s.size
    if p_hash[s[j]] != 0
      p_hash[s[j]] -= 1
      res << i if j - i == p.size - 1
      j += 1
    elsif i == j
      i += 1
      j += 1
    else
      p_hash[s[i]] += 1
      i += 1
    end
  end
  res
end