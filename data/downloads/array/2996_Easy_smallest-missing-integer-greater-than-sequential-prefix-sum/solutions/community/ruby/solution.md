# Ruby solution - 57ms | Beats 73.68%

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5474179/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5474179/)

---

# Intuition

# Approach
  Traverse through the array and get the maximum sum of consecutive sub array as per the condition mentioned. For each and every sub array store the max sum in array `arr`. Finally get the mininum integer from `arr` and return the missing integer.
# Complexity
- Time complexity:
   O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def missing_integer(nums)
  return nums[0] + 1 if nums.count == 1

  i = 1
  arr = []
  sum = nums[0]
  max = -9999
  nums_count = nums.count
  while(i < nums_count)
    if (nums[i] - nums[i-1]) == 1
      sum += nums[i]
      max = sum if sum > max
    else
      if sum > max
        max = sum 
        arr += [max]
      end
      sum = 0
    end
    i += 1
  end 
  arr += [max] if arr.empty?
  max = arr.sort.first
  nums_count.times do
    return max if !nums.include?(max)
    max = max+1
  end
  return max
end
```