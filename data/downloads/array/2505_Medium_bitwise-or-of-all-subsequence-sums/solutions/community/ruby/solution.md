# Ruby (Editorial Approach #1)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5088298/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5088298/)

---

# Code
```
def subsequence_sum_or(nums)
  bit_set_counts = Array.new(64, 0)

  nums.each do |num|
    (0..30).each do |i|
      bit_set_counts[i] += 1 unless (num & (1 << i)).zero?
    end
  end

  result = 0

  (0..62).each do |i|
    result |= (1 << i) unless bit_set_counts[i].zero?

    bit_set_counts[i + 1] += bit_set_counts[i] / 2
  end

  result    
end
```