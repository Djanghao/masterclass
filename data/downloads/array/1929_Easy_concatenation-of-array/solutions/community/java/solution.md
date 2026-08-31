# ✅Java Simple Solution || ✅Runtime 94.17% || ✅ Memory 99.57%

**Author:** Laziz_511
**Votes:** 137
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/3612143/](https://leetcode.com/problems/concatenation-of-array/solutions/3612143/)

---

# Intuition
The code aims to concatenate the given array nums with itself, forming a new array of length **'2*len'**, where len is the length of the input array. In other words, the code duplicates each element in nums and appends it to the end of the array.

# Approach
1. Create a new integer array '**ans**' of size '**2*len**', where '**len**' is the length of the input array '**nums**'.
2. Iterate over the elements of '**nums**' using a for loop.
3. For each element at index 'i', assign '**nums[i]**' to '**ans[i]**' (copy the element).
4. Assign '**nums[i]**' to '**ans[i+len]**' (append the element to the end of the array).
5. Return the resulting array **'ans'**.

# Complexity
- Time complexity:

The code has a time complexity of **O(n)**, where n is the length of the input array nums. The loop iterates over each element in nums exactly once.

- Space complexity:

The code has a space complexity of **O(n)**, where n is the length of the input array nums. The additional space is used to store the resulting array ans, which has a size of 2*len.

# Code
```
class Solution {
    public int[] getConcatenation(int[] nums) {
        int len = nums.length;
        int[] ans = new int[2*len];
        for(int i = 0; i < len; i++){
            ans[i] = nums[i];
            ans[i+len] = nums[i];
        }
        return ans;
    }
}
```
![image.png](./images/0.png)

