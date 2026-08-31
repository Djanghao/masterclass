# 2 pointers approach

**Author:** ChengSeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/3047531/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/3047531/)

---

Prepare left and right pointers, everytime we encountered a white space at next index or at  the end of line, create a dummy right pointer, reverse every character between left and right dummy pointer, and move left pointer to next word starting index.
```ruby
def reverse_words(s)
  left = 0
  
  (0...s.length).each do |right|
    right_whitespace = (right == s.length - 1) || s[right + 1] == ' '
    
    if right_whitespace
      right_dummy = right

      while left < right_dummy
        s[left], s[right_dummy] = s[right_dummy], s[left]
        left += 1
        right_dummy -= 1
      end
    
      left = right + 2
    end
  end

  s
end
```