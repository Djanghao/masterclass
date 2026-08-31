# Ruby - T: O(n) S: O(n) - 100% 100% - Sliding window + prefix max

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/2622645/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/2622645/)

---

```
# @param {Integer[]} nums
# @param {Integer} first_len
# @param {Integer} second_len
# @return {Integer}
def max_sum_two_no_overlap(nums, first_len, second_len)
  n = nums.size
  i = sum = 0

  sums1 = sum_array(nums, n, first_len)
  sums2 = sum_array(nums, n, second_len)

  max = sums2[0]
  left_max = [max]
  n2 = sums2.size

  1.upto(n2 - 1) do |i|
    sum = sums2[i]
    max = [max, sum].max
    left_max[i] = max
  end

  max = sums2[n2 - 1]
  right_max = []
  right_max[n2 - 1] = max

  (n2 - 2).downto(0) do |i|
    sum = sums2[i]
    max = [max, sum].max
    right_max[i] = max
  end

  max = 0

  0.upto(sums1.size - 1) do |i|
    sum = sums1[i]
    left_i = i - second_len
    right_i = i + first_len

    candidates = []
    candidates << left_max[left_i] if left_i >= 0
    candidates << right_max[right_i] if right_i < n2
    
    sum += candidates.max.to_i
    max = [max, sum].max
  end

  max
end

def sum_array(nums, n, k)
  i = sum = 0

  while i < k
    sum += nums[i]
    i += 1
  end

  sums = [sum]
  
  while i < n
    sum += nums[i] - nums[i - k]
    sums << sum
    i += 1
  end

  sums
end

