# Ruby solution with memoization, explained (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/4143624/](https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/4143624/)

---

# Intuition
The subsequences must be the same length, so each element of nums1 must be paired with an element of nums2.  Iterate through the two arrays simultaneously and try each possibility, using memoization to make it more efficient.

# Approach
1. Edge cases: every subsequence must have at least one element.  If one array is all negative and the other is all positive, the answer will be negative.  Take the largest negative number from one and the smallest positive number from the other.
2. Create a memo based on the index in each array.
3. Make the arrays into class variables that can be accessed in the helper function.
4. Call the helper function, starting each index at zero.

Helper function:
1. If you've reached the end of either array, you can't increase the dot product, so return 0.
2. Return the value stored in memo if there is one.
3. Consider three options:
    - Skip the current element in nums1
    - Skip the current element in nums2
    - Take both elements (adding their product to your answer)
4. Choose the option with the highest value, memoize, and return.

# Complexity
- Time complexity:
$$O(n * m)$$

- Space complexity:
$$O(n * m)$$

# Code
```
def max_dot_product(nums1, nums2)
    return nums1.max * nums2.min if nums1.max < 0 && nums2.min > 0
    return nums1.min * nums2.max if nums1.min > 0 && nums2.max < 0

    @memo = Array.new(nums1.length) { Array.new(nums2.length,nil) }
    @nums1, @nums2 = nums1, nums2
    product(0,0)
end

def product(i,j)
    return 0 if i == @nums1.length || j == @nums2.length
    return @memo[i][j] if @memo[i][j]

    option1 = product(i+1,j)
    option2 = product(i,j+1)
    option3 = product(i+1,j+1) + @nums1[i] * @nums2[j]

    @memo[i][j] = [option1,option2,option3].max
end
```