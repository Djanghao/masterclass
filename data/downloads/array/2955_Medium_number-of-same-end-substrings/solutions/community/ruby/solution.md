# Simple solution using Hash and prefix sum

**Author:** user2755N
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/5992670/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/5992670/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
We use a prefix sum array prefix_count to store the cumulative frequency of each character up to each index. This allows us to compute the frequency of any character in a given range in constant time.
By precomputing the prefix sums, each query can be processed in constant time relative to the number of unique characters, rather than recalculating frequencies for each query.


# Complexity
- Time complexity: O(n+m) where n is length of string and m is number of queries
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {String} s
# @param {Integer[][]} queries
# @return {Integer[]}
def same_end_substring_count(s, queries)
  len = s.length
  prefix_count = Hash.new { |hash, key| hash[key] = Array.new(len + 1, 0) }

  # Precompute prefix sums for each character
  (0...len).each do |i|
    char = s[i]
    prefix_count.each_key do |k|
      prefix_count[k][i + 1] = prefix_count[k][i]
    end
    prefix_count[char][i + 1] += 1
  end

  # Process each query
  queries.map do |left, right|
    count = 0

    prefix_count.each do |char, counts|
      freq = counts[right + 1] - counts[left]
      count += freq * (freq - 1) / 2
    end

    count + (right - left + 1)
  end
end
```