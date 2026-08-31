# Kotlin | Two Lines of Code

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5366502/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5366502/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a math problem, since there are a lot of conventions that apply to xor. One of them is that a xor a is going to 0 and another is that a xor b is equal to b xor a. That means if there are a even amount of a number the resulting xor operations are going to end up 0.

# Approach
<!-- Describe your approach to solving the problem. -->
The number of times a number in nums1 is in nums3 is goverened by the size of nums2. This is the same for nums2 with nums1 deciding the amount. That means if the size of nums2 is even then the xor of all numbers in nums1 is going to be 0. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution {
    fun xorAllNums(nums1: IntArray, nums2: IntArray): Int {
        return ((nums2.reduce{ acc, v -> acc xor v } * if(nums1.size % 2 == 1) 1 else 0) 
            xor (nums1.reduce{ acc, v -> acc xor v } * if(nums2.size % 2 == 1) 1 else 0)).toInt()
    }
}
```