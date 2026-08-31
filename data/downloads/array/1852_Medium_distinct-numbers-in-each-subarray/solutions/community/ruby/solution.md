# Ruby sliding window using counter of unique

**Author:** brianh1j2k3
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/2365544/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/2365544/)

---

```ruby
def distinct_numbers(nums, k)
  results = []
  cache = Hash.new(0)
  counter = 0

  i = 0
  while i <= nums.size - 1
    # puts "i: #{i}; cache #{cache}, counter: #{counter}, results: #{results}"
    n = nums[i]
    counter += 1 if cache[n].zero?
    cache[n] += 1

    i += 1
    # Make sure i > than window size
    next unless i > k - 1

    prev_idx = i - k - 1
    if prev_idx >= 0
      prev_n = nums[prev_idx]
      cache[prev_n] -= 1
      counter -= 1 if cache[prev_n].zero?
    end

    results.append(counter)
  end

  results
end
```