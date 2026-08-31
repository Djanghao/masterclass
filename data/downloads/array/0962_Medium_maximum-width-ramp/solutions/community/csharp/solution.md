# a different faster two pointer approach, with Added YouTube explanation

**Author:** vinod_aka_veenu
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/5893942/](https://leetcode.com/problems/maximum-width-ramp/solutions/5893942/)

---

# YouTube Explanation https://youtu.be/4PEZ3RXxAr0
# Intuition and Approach
approach is simple, we will first of all populate the rightMax values of all the values from right to left .
let say nums[] = [9,8,1,0,1,9,4,0,4,1]

then **rightMax[]** = [9,9,9,9,9,9,4,4,4,1] (**from right side we just populated the max on right side including num at index itself**)

like below we can easily find it :-  
for i =n-1 till i>=0 
**rightMax[i] = Math.max(nums[i], rightMax[i+1])**

so what is the next ?? **what is the purpose of all this**?

now we will start in nums array with **left = 0 and right=0**, now we will keep on checking in **rightMax** array till we get a smaller value we are checking with **right** pointer like below:- 

 while(right < n)
 {
 **while(nums[left]<=rightMax[right])**
 right++;
 maxVal = Math.max(maxVal, **right-left-1**) (**added -1** because   right would move one extra right side once it reached to a smaller value)

**left++** // increasing for next value in nums
**skip the maxVal + 1 pointers to check from rightMax array**
right = left + maxVal + 1;

**you might have a question, how this skipp step works??**

lets understand it in simple way ==> suppose left = 0 , and lets say we found a maxVal (j-i) **diff = 5** ;

now we should check the value for **left = 1** , but if start checking in rightMax array from right = **left+1**, in this case we would end up doing this in O(n*n), then what to do ??

we need to do skipping for check like below :- 
**right = maxVal + left + 1**

**why ?? explain it in more details?**
so lets understand, in above left = 0, we found maxVal = (j-i), now as we are looking for maximum difference , so anyway we should start checking **from a index that will produce at least a greater value than maxVal** 

hence if we are checking from left+1 index for difference we need to start checking from (**maxVal + left + 1**) index in rightMax array.

now it should be clear that even though we are using two while loops but it actually takes O(n) time complexity.

finally we would return our **maxVal** as answer that we found for maximum value at every step.

# Code
```C++ []
class Solution {
public:
    int maxWidthRamp(std::vector<int>& nums) {
        int n = nums.size();
        std::vector<int> rightMax(n);
        rightMax[n - 1] = nums[n - 1];
        for (int i = n - 2; i >= 0; i--)
            rightMax[i] = std::max(rightMax[i + 1], nums[i]);

        int left = 0, right = 0, maxVal = 0;
        while (right < n) {
            while (right < n && nums[left] <= rightMax[right])
                right++;
            
            maxVal = std::max(maxVal, right - left - 1);
            left++;
            right = left + maxVal + 1; 
        }
        return maxVal;
    }
};

```
```python []
class Solution:
    def maxWidthRamp(self, nums):
        n = len(nums)
        rightMax = [0] * n
        rightMax[n - 1] = nums[n - 1]

        # Fill the rightMax array
        for i in range(n - 2, -1, -1):
            rightMax[i] = max(rightMax[i + 1], nums[i])

        left, right, maxVal = 0, 0, 0

        # Find the maximum width ramp
        while right < n:
            while right < n and nums[left] <= rightMax[right]:
                right += 1
            
            maxVal = max(maxVal, right - left - 1)
            left += 1
            right = left + maxVal + 1

        return maxVal

```
```C# []
public class Solution {
    public int MaxWidthRamp(int[] nums) {
        int n = nums.Length;
        int[] rightMax = new int[n];
        rightMax[n - 1] = nums[n - 1];

        // Fill the rightMax array
        for (int i = n - 2; i >= 0; i--) 
            rightMax[i] = Math.Max(rightMax[i + 1], nums[i]);

        int left = 0, right = 0, maxVal = 0;

        // Find the maximum width ramp
        while (right < n) {
            while (right < n && nums[left] <= rightMax[right])
                right++;
            
            maxVal = Math.Max(maxVal, right - left - 1);
            left++;
            right = left + maxVal + 1;
        }

        return maxVal;
    }
}

```
```java []
class Solution {

    public int maxWidthRamp(int[] nums) {
        int n = nums.length;
        int[] rightMax = new int[n];
        rightMax[n - 1] = nums[n - 1];

        for (int i = n - 2; i >= 0; i--) 
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
        
        int left = 0, right = 0, maxVal = 0;

        while (right < n) {
            while (right<n && nums[left]<=rightMax[right])
            right++;           
            maxVal = Math.max(maxVal, right - left-1);
            left++;
            right = left + maxVal + 1; 
        }

        return maxVal;
    }
}
```