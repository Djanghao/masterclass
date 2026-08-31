# Ruby, Sliding Window

**Author:** kahtava
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/4943653/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/4943653/)

---

# Code
```
def length_of_longest_substring_k_distinct(s, k)
  result = 0
  
  frequency = Hash.new(0)
  
  left = 0
  (0...s.length).each do |right|
    frequency[s[right]] += 1

    while frequency.values.count(&:positive?) > k
      frequency[s[left]] -= 1
      left += 1
    end

    result = [result, right - left + 1].max
  end

  result
end
```