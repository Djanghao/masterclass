# Very Easy 100% (Fully Explained)(Java, C++, Python, JavaScript, C, Python3)

**Author:** PratikSen07
**Votes:** 169
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/2401258/](https://leetcode.com/problems/maximum-subarray/solutions/2401258/)

---

# **Java Solution (Dynamic Programming Approach):**
Runtime: 1 ms, faster than 89.13% of Java online submissions for Maximum Subarray.
```
class Solution {
    public int maxSubArray(int[] nums) {
        // Initialize currMaxSum & take first element of array from which we start to do sum...
        int maxSum = nums[0];
        // Initialize the current sum of our subarray as nums[0]...
        int currSum = nums[0];
        // Traverse all the element through the loop...
        for (int i = 1; i < nums.length; i++) {
            // Do sum of elements contigous with curr sum...
            // Compare it with array element to get maximum result...
            currSum = Math.max(currSum + nums[i], nums[i]);
            // Compare current sum and max sum.
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;      // return the contiguous subarray which has the largest sum...
    }
}
```

# **C++ Solution (Kadane\u2019s approach):**
```
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Initialize maxSum as an integer that cannot store any value below the limit...
        int maxSum = INT_MIN;
        // Initialize maxSum...
        int maxSumSoFar = 0;
        // Traverse all the element through the loop...
        for(int i = 0; i < nums.size(); i++){
            // Keep adding the current value...
            maxSumSoFar += nums[i];
            // Update maxSum to maxSum and maxSumSoFar...
            if(maxSum < maxSumSoFar){
                maxSum = maxSumSoFar;
            }
            // if maxSumSoFar is less than 0 then update it to 0...
            if(maxSumSoFar < 0){
                maxSumSoFar = 0;
            }
        }
        return maxSum;      // Return the contiguous subarray which has the largest sum...
    }
};
```

# **Python Solution (Dynamic Programming Approach):**
Runtime: 585 ms, faster than 95.18% of Python online submissions for Maximum Subarray.
Memory Usage: 25.3 MB, less than 97.76% of Python online submissions for Maximum Subarray.
```
class Solution(object):
    def maxSubArray(self, nums):
        # Create an array...
        arr = []
        arr.append(nums[0])
        # Initialize the max sum...
        maxSum = arr[0]
        # Traverse all the element through the loop...
        for i in range(1, len(nums)):
            # arr[i] represents the largest sum of all subarrays ending with index i...
            # then its value should be the larger one between nums[i]...
            # arr[i-1] + nums[i] (largest sum plus current number with using prefix)...
            # calculate arr[0], arr[1]\u2026, arr[n] while comparing each one with current largest sum...
            arr.append(max(arr[i-1] + nums[i], nums[i]))
            # if arr[i] > maxSum then maxSum = arr[i].
            if arr[i] > maxSum:
                maxSum = arr[i]
        return maxSum       # Return the contiguous subarray which has the largest sum...
```
                    
# **JavaScript Solution (Dynamic Programming Approach):**
Runtime: 103 ms, faster than 75.34% of JavaScript online submissions for Maximum Subarray.
```
var maxSubArray = function(nums) {
    // Initialize the max sum...
    let maxSum = nums[0];
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]\u2026, nums[n] while comparing each one with current largest sum...
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        // if nums[i] > maxSum then maxSum = nums[i]...
        if (nums[i] > maxSum)
            maxSum = nums[i];
    }
    return maxSum;      // return the contiguous subarray which has the largest sum...
};
```

# **C Language (Kadane\u2019s approach):**
```
int maxSubArray(int* nums, int numsSize){
    // Initialize maxSum as an integer that cannot store any value below the limit...
    int maxSum = nums[0];
    // Initialize maxSum...
    int maxSumSoFar = 0;
    // Traverse all the element through the loop...
    for(int i = 0; i < numsSize; i++){
        // Keep adding the current value...
        maxSumSoFar += nums[i];
        // Update maxSum to maxSum and maxSumSoFar...
        if(maxSum < maxSumSoFar){
            maxSum = maxSumSoFar;
        }
        // if maxSumSoFar is less than 0 then update it to 0...
        if(maxSumSoFar < 0){
            maxSumSoFar = 0;
        }
    }
    return maxSum;      // Return the contiguous subarray which has the largest sum...
}
```

# **Python3 Solution (Dynamic Programming Approach):**
```
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Create an array...
        arr = []
        arr.append(nums[0])
        # Initialize the max sum...
        maxSum = arr[0]
        for i in range(1, len(nums)):
            # arr[i] represents the largest sum of all subarrays ending with index i...
            # then its value should be the larger one between nums[i]...
            # arr[i-1] + nums[i] (largest sum plus current number with using prefix)...
            # calculate arr[0], arr[1]\u2026, arr[n] while comparing each one with current largest sum...
            arr.append(max(arr[i-1] + nums[i], nums[i]))
            # if arr[i] > maxSum then maxSum = arr[i].
            if arr[i] > maxSum:
                maxSum = arr[i]
        return maxSum       # Return the contiguous subarray which has the largest sum...
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**