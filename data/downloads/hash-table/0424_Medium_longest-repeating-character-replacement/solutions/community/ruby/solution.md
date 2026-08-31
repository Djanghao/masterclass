# Ruby, sliding window O(n)

**Author:** blither
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2385086/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2385086/)

---

```
def character_replacement(s, k)
  char_counts = Hash.new(0)
  longest_string, left = 0, 0
  
  s.chars.each_index do |i|
    char_counts[s[i]] += 1
    sliding_window_size = i - left + 1
    character_change_cap = char_counts.values.max + k
    
    if sliding_window_size > character_change_cap
      char_counts[s[left]] -= 1
      left += 1
    end
      
    longest_string = [longest_string, i-left+1].max
  end
  
  longest_string
end
```