# Intuitive, Brute-Force Approach

**Author:** Jared_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/4086147/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/4086147/)

---

# Code
```
def count_distinct(nums, k, p)
  subs = Set.new
  nums.each_index do |start|
    kcount = 0
    curr = []
    (start .. nums.length-1).each do |i|
      kcount += 1 if nums[i] % p == 0
      break if kcount > k

      curr = [*curr, nums[i]]
      subs << curr
    end
  end
  subs.size
end

```

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
