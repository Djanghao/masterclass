# Ruby, Binary Search / O(n^2  logn)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/5591468/](https://leetcode.com/problems/longest-repeating-substring/solutions/5591468/)

---

# Code
```
def longest_repeating_substring(s)
  has_repeating_substring = lambda do |target|
    visited = Set.new
    (s.length - target + 1).times do |i|
      substring = s[i...i + target]

      return true if visited.include?(substring)

      visited.add(substring)
    end
    false
  end

  left = 1
  right = s.length - 1
  while left <= right
    middle = (left + right) / 2
    if has_repeating_substring.call(middle)
      left = middle + 1
    else
      right = middle - 1
    end
  end
  left - 1
end
```