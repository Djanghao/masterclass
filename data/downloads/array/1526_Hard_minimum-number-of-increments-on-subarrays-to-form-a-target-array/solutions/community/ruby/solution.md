# Ruby T: O(n) S: O(1) 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/2555875/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/2555875/)

---

```
# @param {Integer[]} target
# @return {Integer}
def min_number_operations(target)
  prev = result = 0
  
  target.each do |num|
    result += num - prev if num > prev
    prev = num
  end

  result
end