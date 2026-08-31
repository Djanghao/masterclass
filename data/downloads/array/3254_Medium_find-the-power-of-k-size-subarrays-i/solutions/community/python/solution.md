# 3💥Approaches || 🤔Unique |Beats 100%💸 || Easy O(N) Solution 💡 || Sliding Window😅|

**Author:** Garv_Virmani
**Votes:** 25
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050168/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050168/)

---

# Please Upvote
![image.png](./images/1.png)
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sliding Window
# Approach 1(Optimal)
<!-- Describe your approach to solving the problem. -->
Unique
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code

```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>ans(n-k+1,-1);
        int i=0,j=0;
        while(j<n){
            if(j>0 && nums[j]-nums[j-1]!=1){
                i=j;
            }
            while(i<j && j-i+1>k){
                i++;
            }
            if(j-i+1==k)
                ans[j-k+1]=nums[j];
            j++;
        }
        return ans;
    }
};
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    let n = nums.length;
    let ans = new Array(n - k + 1).fill(-1); // Initialize answer array with -1
    let i = 0, j = 0;
    
    while (j < n) {
        if (j > 0 && nums[j] - nums[j - 1] !== 1) {
            i = j; // Reset 'i' when the difference is not 1
        }

        // Ensure the length of the subarray is not greater than 'k'
        while (i < j && j - i + 1 > k) {
            i++;
        }

        if (j - i + 1 === k) {
            ans[j - k + 1] = nums[j]; // Set the value when the subarray length is exactly 'k'
        }
        
        j++;
    }

    return ans;
};

```
```python []
class Solution(object):
    def resultsArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        n = len(nums)
        ans = [-1] * (n - k + 1)  # Initialize answer list with -1
        i, j = 0, 0
        
        while j < n:
            if j > 0 and nums[j] - nums[j - 1] != 1:
                i = j  # Reset 'i' when the difference is not 1
            
            while i < j and j - i + 1 > k:
                i += 1  # Shrink the window if its size is greater than 'k'
            
            if j - i + 1 == k:
                ans[j - k + 1] = nums[j]  # Set the current number when the window size is exactly 'k'
            
            j += 1
        
        return ans

```
```python3 []
from typing import List

class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        ans = [-1] * (n - k + 1)
        i, j = 0, 0
        
        while j < n:
            if j > 0 and nums[j] - nums[j - 1] != 1:
                i = j
            while i < j and j - i + 1 > k:
                i += 1
            if j - i + 1 == k:
                ans[j - k + 1] = nums[j]
            j += 1
        
        return ans

```
```java []
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        int n = nums.length;
        int[] ans = new int[n - k + 1];  // Initialize result array with size (n - k + 1)
        for (int i = 0; i < ans.length; i++) {
            ans[i] = -1;  // Fill the array with -1 as the default value
        }

        int i = 0, j = 0;
        while (j < n) {
            if (j > 0 && nums[j] - nums[j - 1] != 1) {
                i = j;  // Reset the 'i' index if the difference is not 1
            }

            // Ensure the window size is not greater than k
            while (i < j && j - i + 1 > k) {
                i++;  // Shrink the window from the left
            }

            // If we have exactly k elements in the window, update the answer array
            if (j - i + 1 == k) {
                ans[j - k + 1] = nums[j];  // Store the current element in the result array
            }
            j++;  // Move the right pointer
        }

        return ans;
    }
}
```
```c []
#include <stdlib.h>

int* resultsArray(int* nums, int numsSize, int k, int* returnSize) {
    // Calculate the size of the resulting array
    *returnSize = numsSize - k + 1;
    
    // If the resulting array size is non-positive, return an empty array
    if (*returnSize <= 0) {
        return NULL;
    }

    // Allocate memory for the result array
    int* ans = (int*)malloc(*returnSize * sizeof(int));
    if (ans == NULL) {
        return NULL;  // If memory allocation fails, return NULL
    }

    int i = 0, j = 0;
    
    // Fill the result array with default values (-1)
    for (int idx = 0; idx < *returnSize; idx++) {
        ans[idx] = -1;
    }

    // Process the array to find the correct subarrays of size 'k'
    while (j < numsSize) {
        // If the difference between nums[j] and nums[j-1] is not 1, reset i
        if (j > 0 && nums[j] - nums[j - 1] != 1) {
            i = j;
        }
        
        // Ensure the window size is at most 'k'
        while (i < j && j - i + 1 > k) {
            i++;
        }

        // If the window size equals 'k', store the result
        if (j - i + 1 == k) {
            ans[j - k + 1] = nums[j];
        }

        // Move the right pointer
        j++;
    }

    // Return the result array
    return ans;
}
```

# Approach 2(Better)
O(N) Time & O(N) Space
```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>temp(n,1);
        vector<int>ans(n-k+1,-1);
        for(int i=1;i<n;i++){
            if(nums[i]-nums[i-1]==1){
                temp[i]=temp[i-1]+1;
            }
        }
        for(int i=0;i<n;i++){
            if(temp[i]>=k){
                ans[i-k+1]=nums[i];
            }
        }
        return ans;
    }
};
```

# Approach 3(Brute)
O(N*k) Time & O(1) Space
```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>ans;
        for(int i=0;i<n-k+1;i++){
            bool flag=1;
            for(int j=i;j<i+k;j++){
                if(j>i && nums[j]-nums[j-1]!=1){
                    flag=0;
                    break;
                }
            }
            if(flag){
                ans.push_back(nums[i+k-1]);
            }
            else{
                ans.push_back(-1);
            }
        }
        return ans;
    }
};
```
![image.png](./images/1.png)