# Ruby, Sliding Window

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/4960275/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/4960275/)

---

# Code
```
def length_of_longest_substring_two_distinct(s)
  return s.length if s.chars.uniq.length == 1
  
  result = 0

  frequency = Hash.new(0)
  
  left = 0
  (0...s.length).each do |right|
    frequency[s[right]] += 1
  
    while frequency.keys.length > 2
      frequency[s[left]] -= 1
      left += 1

      frequency.delete_if { |_k, value| value.zero? } 
    end

    result = [result, right - left + 1].max    
  end

  result
end
```