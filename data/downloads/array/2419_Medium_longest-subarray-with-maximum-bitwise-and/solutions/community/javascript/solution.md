# 🔥🔥Easiest Approach | Beats 98.90% 🚀| Must Watch 😎

**Author:** The_Sanket_Deshmukh
**Votes:** 15
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5783422/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5783422/)

---

### Intuition \u2728
To solve this problem, the key idea is to **identify the subarrays where the bitwise AND is maximized**. The maximum bitwise AND can only happen when all elements in the subarray are the same and equal to the **maximum value** in the array. Therefore, our task is to:
- **Find the maximum value** in the array.
- **Identify the longest contiguous subarray** where each element is equal to this maximum value.

### Approach \uD83D\uDE80

1. **Find the Maximum Element**: First, we find the maximum value in the array, which will help us identify which subarrays can potentially have the maximum bitwise AND.
   
2. **Traverse the Array**: 
   - Start from the first element and find contiguous subarrays where each element is equal to the maximum value.
   - Keep track of the longest subarray that contains this maximum value.
   
3. **Return the Length of the Longest Subarray**: Finally, return the length of the longest subarray where all elements equal the maximum value.

### Code Walkthrough \uD83D\uDCDD

1. **Find Maximum Element**: `maxBitwiseAnd = *max_element(nums.begin(),nums.end());`
   - This step finds the maximum element, which is essential because only subarrays containing this element can have the maximum bitwise AND.

2. **Traverse the Array**: 
   - We iterate through the array, counting the length of contiguous sequences of the maximum value.
   - For each such sequence, we update the result if the current sequence is longer than the previous ones.

3. **Edge Case Handling**: If no maximum value exists as a subarray, the loop won't enter the counting phase, but in all valid cases, it will return the longest subarray's length.

### Time Complexity \u23F3
- **Finding the maximum element** takes \\(O(n)\\), where \\(n\\) is the length of the array.
- **Traversing the array** to find the longest subarray of the maximum element also takes \\(O(n)\\).
- Thus, the overall time complexity is **O(n)**.

### Space Complexity \uD83D\uDCBE
- We are using a few extra variables (`maxi`, `count`, `i`), so the space complexity is **O(1)**, which means the algorithm uses a constant amount of extra memory.

### Summary \uD83C\uDFAF
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

# Code
```cpp []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        ios_base::sync_with_stdio(false);
        cin.tie(0);
        
        int maxBitwiseAnd = *max_element(nums.begin(),nums.end());
        int maxi = 1;
        int count = 0;
        int i = 0;
        while(i < nums.size())
        {
            if(nums[i] == maxBitwiseAnd)
            {
                while(i < nums.size() and nums[i++] == maxBitwiseAnd) count++;
                maxi = max(maxi,count);
                count = 0;
            }
            else i++;
        }
        return maxi;
    }
};
```
```java []
class Solution {
    public int longestSubarray(int[] nums) {
        int maxBitwiseAnd = Integer.MIN_VALUE;
        
        // Find the maximum value in the array
        for (int num : nums) {
            maxBitwiseAnd = Math.max(maxBitwiseAnd, num);
        }
        
        int maxi = 1;
        int count = 0;
        int i = 0;
        
        while (i < nums.length) {
            if (nums[i] == maxBitwiseAnd) {
                while (i < nums.length && nums[i++] == maxBitwiseAnd) {
                    count++;
                }
                maxi = Math.max(maxi, count);
                count = 0;
            } else {
                i++;
            }
        }
        
        return maxi;
    }
}
```
```python []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        maxBitwiseAnd = max(nums)
        maxi = 1
        count = 0
        i = 0
        
        while i < len(nums):
            if nums[i] == maxBitwiseAnd:
                while i < len(nums) and nums[i] == maxBitwiseAnd:
                    count += 1
                    i += 1
                maxi = max(maxi, count)
                count = 0
            else:
                i += 1
        
        return maxi

```
```javascript []
var longestSubarray = function(nums) {
    let maxBitwiseAnd = Math.max(...nums);
    let maxi = 1;
    let count = 0;
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] === maxBitwiseAnd) {
            while (i < nums.length && nums[i] === maxBitwiseAnd) {
                count++;
                i++;
            }
            maxi = Math.max(maxi, count);
            count = 0;
        } else {
            i++;
        }
    }
    
    return maxi;
};
```
![LC GIF.gif](./images/0.gif)
