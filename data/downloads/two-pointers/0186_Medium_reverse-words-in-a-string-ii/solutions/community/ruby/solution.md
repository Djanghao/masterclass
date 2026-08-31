# Ruby, Reverse Lambda

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4880441/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4880441/)

---

# Code
```
def reverse_words(s)
  reverse = ->(left, right) do
    while left <= right
      s[left], s[right] = s[right], s[left]
      left += 1
      right -= 1
    end
  end

  reverse.call(0, s.length - 1)

  word_start, word_end = 0, 0
  while word_end < s.length
    if s[word_start] == ' ' && s[word_end] == ' '
      word_start += 1
      word_end += 1
    elsif s[word_end] != ' '
      word_end += 1
    elsif s[word_end] == ' '
      reverse.call(word_start, word_end - 1)
      while s[word_end] == ' '
        word_end += 1
      end
      word_start = word_end
    end
  end

  reverse.call(word_start, s.length - 1)
end
```