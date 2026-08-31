# ruby solution

**Author:** johnhaoxian
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4367448/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4367448/)

---

# Intuition
Sliding window

# Approach
sliding window
# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
# @param {String} word
# @param {String[]} forbidden
# @return {Integer}

def longest_valid_substring(word, forbidden)
  ans = 0
  n = word.length
  set = Set.new(forbidden)
  right = n - 1

  (n - 1).downto(0) do |left|
    curr = ''
    (left..[left + 10, right].min).each do |k|
      curr += word[k]
      if set.include?(curr)
        right = k - 1
        break
      end
    end
    ans = [ans, right - left + 1].max
  end

  ans
end
```