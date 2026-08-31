# Ruby Solution Extract Digits from number

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5857931/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5857931/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}

# dynamically styped scripting language ( no static typing here ) 
def getDigitSum(num)
    digSum = 0
    while(num >= 10) do
        rem = num % 10
        digSum += rem
        num = (num / 10).to_i 
    end
    digSum += num
    return digSum
end

# call methods after their definition
def min_element(nums)
    minVal = Float::INFINITY
    for num in nums do
        digitSum = getDigitSum(num)
        minVal = (digitSum < minVal) ? digitSum : minVal
    end
    return minVal
end


```