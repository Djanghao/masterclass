# Ruby solution

**Author:** lucasaguilar835
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4894532/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4894532/)

---

# Code
```
def subarray_gcd(nums, k)
  count = 0

  (0..nums.size-1).each do |x|
    # If nums[x] is not divisible by k, go to the next number
    next if nums[x] % k != 0
    (x..nums.size-1).each do |y|
      # If nums[y] is not divisible by k, break this inner loop
      break if nums[y] % k != 0
      # Check if nums[x] is equal to k. If yes, count +1
      # otherwise, check the gcd between the subarray (nums[x..y])
      count += 1 if nums[x] == k || nums[x..y].reduce(&:gcd) == k
    end
  end

  count
end

```
