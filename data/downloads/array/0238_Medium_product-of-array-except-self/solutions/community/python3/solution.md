# Simple and easy 1 min explanation in Python and JAVA

**Author:** sukumar-satapathy
**Votes:** 296
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/4069888/](https://leetcode.com/problems/product-of-array-except-self/solutions/4069888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Similar to finding Prefix Sum array, here the preblem intends us to find the Prefix Product Array and Suffix Product Array for our original array.
```
pre[i+1] = pre[i] * a[i]
suff[i-1] = suff[i] * a[i]
```

# Complexity
- Time complexity: $$O(n)$$
Only 2 loops iterating $$n$$ times each without any nesting.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
We have taken prefix and suffixProduct as variables instead of arrays to further optimize space, even though the overall complexity remains the same.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int numsLength = nums.length;
        int prefixProduct = 1;
        int suffixProduct = 1;
        int[] result = new int[numsLength];
        for(int i = 0; i < numsLength; i++) {
            result[i] = prefixProduct;
            prefixProduct *= nums[i];
        }
        for(int i = numsLength-1; i >= 0; i--) {
            result[i] *= suffixProduct;
            suffixProduct *= nums[i];
        }
        return result;
    }
}
```
```python3 []
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prefix_product = 1
        postfix_product = 1
        result = [0]*n
        for i in range(n):
            result[i] = prefix_product
            prefix_product *= nums[i]
        for i in range(n-1,-1,-1):
            result[i] *= postfix_product
            postfix_product *= nums[i]
        return result
```
*Please upvote, if this helped you understand the solution in optimal time :)*
