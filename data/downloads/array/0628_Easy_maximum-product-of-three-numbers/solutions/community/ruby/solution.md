# Simple Ruby Solution

**Author:** cuzzo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/316991/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/316991/)

---

```Ruby
def maximum_product(nums)
    nums = nums.sort
    
    [
        nums.last(3).reduce(:*),
        nums.last * nums[0] * nums[1]
    ].max
end
```