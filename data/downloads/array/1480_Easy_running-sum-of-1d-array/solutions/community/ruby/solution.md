# Ruby 96% faster solution

**Author:** NRamos41
**Votes:** 7
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2291984/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2291984/)

---

```
@param {Integer[]} nums
@return {Integer[]}
def running_sum(nums)
    (nums.length).times do |i|
        if i >= 1
            nums[i] += nums[i - 1] 
        end
    end
    nums
end
```