# Using hashmap

**Author:** ifelsethenthat
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4636924/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4636924/)

---

# Code
```
def maximum_length(nums)
  h = nums.tally
  count = h.size > 0 ? 1 : 0
  count = h[1].odd? ? h[1] : h[1] - 1 if h[1]

  h.each do |k, v|
    next if k == 1 || v <= 1

    if h.key?(k ** 2)
      pow = 2
      local_count = 2

      while h.key?(k ** pow) && h[k ** pow] > 1
        local_count += 1
        pow *= 2
        local_count += 1 if h.key?(k ** pow)
      end

      local_count += 1 if h.key?(k ** pow)
      count = local_count if local_count > count
    end
  end
  
  count
end

```