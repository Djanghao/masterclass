# Ruby Two Pointer Approach

**Author:** vladhilko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/4883362/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/4883362/)

---

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def find_the_array_conc_val(nums)
  left = 0
  right = nums.size - 1
  sum = 0

  while left <= right
    left == right ? sum += nums[left] : sum += "#{nums[left]}#{nums[right]}".to_i

    left += 1
    right -= 1
  end
  sum
end
```