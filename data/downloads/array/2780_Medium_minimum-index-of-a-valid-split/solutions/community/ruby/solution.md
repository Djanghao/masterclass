# Ruby Super Easy 100% | Concise

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4926644/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4926644/)

---

Ruby | Easy | Short | Concise
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimum_index(nums)
  full=nums.tally
  half=Hash.new(0)
  n=nums.size

  nums.each_with_index do |num, i|
    half[num] += 1
    left = half[num]
    right = full[num] - left
    return i if left * 2 > i + 1 && right * 2 > n - i - 1
  end
  -1
end
```