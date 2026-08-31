# Ruby, Sliding Window

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5362634/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5362634/)

---

# Code
```
def number_of_special_substrings(s)
  result = 0

  frequencies = Hash.new(0)
  
  left = 0
  (0...s.length).each do |right|
    frequencies[s[right]] += 1

    while frequencies[s[right]] > 1
      frequencies[s[left]] -= 1
      left += 1
    end

    result += right - left + 1
  end

  result
end
```