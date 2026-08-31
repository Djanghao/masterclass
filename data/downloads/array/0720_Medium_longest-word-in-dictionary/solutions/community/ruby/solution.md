# Ruby 50ms / 11MB

**Author:** VolupTatum
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/533566/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/533566/)

---

Let me know if you find rooms for improvemenst + error on run-time/space analysis!

Run-time: O(n(log(n))
Space: O(n)

```
def longest_word(words)
  words.sort!
  
  memo = {}
  candidate = ""

  words.each do |word|
    if word.length == 1 || memo[word[0..-2]]
      memo[word] = true
      candidate = word if word.length > candidate.length
    end
  end
  
  candidate
end
```