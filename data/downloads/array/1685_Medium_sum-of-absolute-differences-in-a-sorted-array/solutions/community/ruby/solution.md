# Ruby Solution

**Author:** Purandhar999
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4323618/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4323618/)

---


# Code
```

def get_sum_absolute_differences(nums)
  n = nums.count
  left = 0
  right = (1...n).map{|i| nums[i] - nums[0]}.sum
  result = [right]
  
  (1...n).each do |i|
    diff = nums[i] - nums[i-1]
    right -= diff*(n - i)
    left += diff*i
    result << left + right
  end
  
  result
end
```