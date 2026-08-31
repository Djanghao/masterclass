# Ruby Solution using Sliding Window

**Author:** hydras15
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equal-count-substrings/solutions/5949982/](https://leetcode.com/problems/number-of-equal-count-substrings/solutions/5949982/)

---



# Code
```ruby []
# @param {String} s
# @param {Integer} count
# @return {Integer}
def equal_count_substrings(s, k)
  n = s.length
  count = 0
  (1..s.chars.uniq.length).each do |unique_chars|
    if unique_chars * k <= n
      left = same_freq_count = 0
      freq = Hash.new(0)
      (0...n).each do |right|
        freq[s[right]] += 1
        same_freq_count += 1 if freq[s[right]] == k
        if right >= unique_chars * k - 1
          count += 1 if unique_chars == same_freq_count
          same_freq_count -= 1 if freq[s[left]] == k
          freq[s[left]] -= 1
          left += 1
        end
      end
    end
  end
  count
end

```