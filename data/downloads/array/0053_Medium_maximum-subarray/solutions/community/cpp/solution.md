# ✅Beats 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 696
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/3666304/](https://leetcode.com/problems/maximum-subarray/solutions/3666304/)

---

# Intuition
The Intuition behind the code is to find the maximum sum of a contiguous subarray within the given array `nums`. It does this by scanning through the array and keeping track of the current sum of the subarray. Whenever the current sum becomes greater than the maximum sum encountered so far, it updates the maximum sum. If the current sum becomes negative, it resets the sum to 0 and starts a new subarray. By the end of the loop, the code returns the maximum sum found.

# Approach:

1. We start by initializing two variables: `maxSum` and `currentSum`.
   - `maxSum` represents the maximum sum encountered so far and is initially set to the minimum possible integer value to ensure that any valid subarray sum will be greater than it.
   - `currentSum` represents the current sum of the subarray being considered and is initially set to 0.
2. We iterate through the `nums` array using a for loop, starting from the first element and going up to the last element.
3. For each element in the array, we add it to the current sum `currentSum`. This calculates the sum of the subarray ending at the current element.
4. Next, we check if the current sum `currentSum` is greater than the current maximum sum `maxSum`.
   - If it is, we update `maxSum` with the new value of `currentSum`. This means we have found a new maximum subarray sum.
5. If the current sum `currentSum` becomes negative, it indicates that including the current element in the subarray would reduce the overall sum. In such cases, we reset `currentSum` to 0. This effectively discards the current subarray and allows us to start a fresh subarray from the next element.
6. We repeat steps 3 to 5 for each element in the array.
7. After iterating through the entire array, the variable `maxSum` will contain the maximum subarray sum encountered.
8. Finally, we return the value of `maxSum` as the result, representing the maximum sum of a contiguous subarray within the given array `nums`.

# Code

```C++ []
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = INT_MIN;
        int currentSum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            currentSum += nums[i];
            
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
            
            if (currentSum < 0) {
                currentSum = 0;
            }
        }
        
        return maxSum;
    }
};
```
```Java []
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;
        
        for (int i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
            
            if (currentSum < 0) {
                currentSum = 0;
            }
        }
        
        return maxSum;
    }
}
```
```Python3 []
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = float('-inf')
        currentSum = 0
        
        for num in nums:
            currentSum += num
            
            if currentSum > maxSum:
                maxSum = currentSum
            
            if currentSum < 0:
                currentSum = 0
        
        return maxSum
```

# clean code

```C++ []
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }

        return maxSum;
    }
};
```
```Java []
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}
```
```Python3 []
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        currentSum = nums[0]

        for num in nums[1:]:
            currentSum = max(num, currentSum + num)
            maxSum = max(maxSum, currentSum)

        return maxSum
```

![CUTE_CAT.png](./images/0.png)

**If you are a beginner solve these problems which makes concepts clear for future coding:**
1. [Two Sum](https://leetcode.com/problems/two-sum/solutions/3619262/3-method-s-c-java-python-beginner-friendly/)
2. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/solutions/3651672/best-method-c-java-python-beginner-friendly/)
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/)
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/solutions/3666304/beats-100-c-java-python-beginner-friendly/)
5. [Remove Element](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/)
6. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/solutions/3672475/4-method-s-c-java-python-beginner-friendly/)
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)
8. [Majority Element](https://leetcode.com/problems/majority-element/solutions/3676530/3-methods-beats-100-c-java-python-beginner-friendly/)
9. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/)
10. **Practice them in a row for better understanding and please Upvote for more questions.**



**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

