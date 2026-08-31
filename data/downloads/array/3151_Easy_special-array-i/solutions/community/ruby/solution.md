# Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5911802/](https://leetcode.com/problems/special-array-i/solutions/5911802/)

---


# Code
```ruby []
# @param {Integer[]} nums
# @return {Boolean}
def is_array_special(nums)
    ans = true
    first = nums[0] % 2 == 0
    nums.each_with_index do |n,i|
        next if i == 0
        coe = n % 2 == 0
        if first == coe
            return false
        end
        first = coe
    end
    return ans
end
```