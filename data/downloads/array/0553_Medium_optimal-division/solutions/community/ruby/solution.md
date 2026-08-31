# Ruby - T: O(n) S: O(n) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/2618434/](https://leetcode.com/problems/optimal-division/solutions/2618434/)

---

```
# @param {Integer[]} nums
# @return {String}
def optimal_division(nums)
  case nums.size
  when 1
    nums[0].to_s
  when 2
    "#{nums[0]}/#{nums[1]}"
  else
    "#{nums[0]}/(#{nums[1..].join('/')})"
  end
end