# Ruby sliding window 100% faster

**Author:** kyle_kyle_kyle
**Votes:** 0
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/1683805/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/1683805/)

---

Sliding window for each element in `words`; the results are sorted once completed
```ruby
def index_pairs(text, words)
  index_pairs = []
  
  for word in words do
    next if word.length > text.length
    left, right = 0, word.length - 1
    while right < text.length do
      if word[0] == text[left] && word == text.slice(left, word.length)
        index_pairs.push([left, right])
      end
      left += 1
      right += 1
    end    
  end

  p index_pairs.sort! 
end
```