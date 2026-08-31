# Ruby Beats 100.00% in Memory and Time

**Author:** Garrison_J
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/4459448/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/4459448/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Any number multiplied by an even number is an even number. We can use that to our advantage in this sliding window problem.

We will slide a window across the array. When we find a subarray where the product is even, we know that all the subarrays that contain this array must also be even. 

```
# For example, let's say we look at the subarray 
# from index 0 and 3 and see that the product is 
# even. We then know that every subarray that 
# contains this subarray will also have an even product.
[_, _, _, _, _, _, _]
 ^        ^
# If the product from 0 to 3 is even, then the following 
# subarrays must also have even products:
[_, _, _, _, _, _, _]
 ^           ^
[_, _, _, _, _, _, _]
 ^              ^
[_, _, _, _, _, _, _]
 ^                 ^

```

# Approach
<!-- Describe your approach to solving the problem. -->
1. Keep two pointers, `hi` and `low` to track our window.
2. Keep a `count` to count how many even subarrays there are.
3. Keep a `current_prod` to track the product of the current subarray we are looking at.
4. Loop while `low` and `hi` are less than the num's length.
    -  Multiple `current_prod` by the new number we are looking at.
    -  If that made `current_prod` even, start an inner loop to count subarrays and move `low` forward
        - Add to `count` all the subarrays we could make if we moved `hi` forward until we hit the end of the array. 
          - Note: We don't have to actually move `hi` forward because we know that any number multiplied by an even number is even.
        -  Divide `current_prod` by `nums[low]` because we are about to shrink the window by moving the `low` forward. And then move `low` forward.
    - Move `hi` forward to repeat the process. 

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def even_product(nums)
    low, hi = 0, 0
    count = 0
    current_prod = 1
    while low < nums.size && hi < nums.size do
        current_prod *= nums[hi]
        while current_prod.even? && low < nums.size do
            count += nums.size - hi
            current_prod /= nums[low]
            low+=1
        end
        hi += 1
    end
    count
end
```