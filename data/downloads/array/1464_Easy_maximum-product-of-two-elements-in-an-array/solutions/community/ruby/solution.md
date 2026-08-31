# 🟢Easy Python & Ruby Solution | 3 Approaches with Explanation 🚀🚀

**Author:** mitchell000
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4397222/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4397222/)

---

# Video Explanation (3 Approaches)
https://youtu.be/KG8FVEkWyvA

# Approach
Two variables

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```Ruby []
# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
    biggest = 0
    second_biggest = 0
    nums.each do |num|
        if num > biggest
            second_biggest = biggest
            biggest = num
        else
            second_biggest = [second_biggest, num].max
        end
    end
    return (biggest-1)*(second_biggest-1)
end
```
```Python []
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        biggest, second_biggest = 0,0
        for num in nums:
            if num > biggest:
                second_biggest = biggest
                biggest = num
            else:
                second_biggest = max(second_biggest, num)
        return (biggest-1)*(second_biggest-1)
```