# Described easily with example and solution in C++, Java, Python3, JavaScript

**Author:** Subhankar_99
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/3310207/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/3310207/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First approach is to get all the subarray. Then get the sum of all elements and absolute it for each subarray and take the maximum of them.

# Approach
<!-- Describe your approach to solving the problem. -->
But problem is that we need pow(2,n) complexity time to get all subarrays and O(n) to get sum for each subarray. So the total time complexity will be O(n*pow(2,n)). So it will not work.
If we look carefully we can get result either from maximum sum or from minimum sum if it is negative. So it will be better if we take two variable one for local maximum and another for local minimum and we started traversing linearly from index 0. And every time cur_max will be maximum of cur_max and cur_max+value at ith index. Similarly for cur_minimum. And we need a global_max which will keep the maximum of all cur_max and global_min for all cur_min.
Let's understand with an example..
nums = [1,-3,2,3,-4]
initially g_max = Int_min, g_min = Int_max, cur_max = 0, cur_min = 0
at index i=0
cur_max = max(1,0+1) = 1, cur_min = min(1,0+1) = 1
g_max = max(Int_min,1) = 1, g_min = min(Int_max,1) = 1
at index i = 1
cur_max = max(-3,1-3) = -2, cur_min = min(-3,1-3) = -3
g_max = max(1,-2) = 1, g_min = min(1,-3) = -3
at index i=2
cur_max = max(2,-2+2) = 2, cur_min = min(2,-3+2) = -1
g_max = max(1,2) = 2, g_min = min(-3,-1) = -3
at index i =3
cur_max = max(3,2+3) = 5, cur_min = min(3,-1+3) = 2
g_max = max(2,5) = 5, g_min = min(-3,2) = -3
at index i = 4
cur_max = max(-4,5-4) = 1, cur_min = min(-4,2-4) = -4
g_max = max(5,1) = 5, g_min = min(-3,-4) = -4

So at the end result = max(5,abs(-4)) = 5

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Here we are traversing the whole array only one time. So time complexity will be O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Here we are using only four variables for extra space. So Space Complexity will be constant i,e O(1)

# Code
- C++
```
class Solution {
public:
    int maxAbsoluteSum(vector<int>& nums) {
        int maxi = INT_MIN, mini = INT_MAX;
        int cur_max = 0, cur_min = 0;
        for(int i=0; i<nums.size(); i++){
            cur_max = max(cur_max+nums[i],nums[i]);
            cur_min = min(cur_min+nums[i],nums[i]);
            maxi = max(maxi,cur_max);
            mini = min(mini,cur_min);
        }
        return max(maxi,-mini);

    }
};
```
- Java
```
class Solution {
    public int maxAbsoluteSum(int[] nums) {
        int maxi = Integer.MIN_VALUE, mini = Integer.MAX_VALUE;
        int cur_max = 0, cur_min = 0;
        for(int i=0; i<nums.length; i++){
            cur_max = Math.max(nums[i],cur_max+nums[i]);
            cur_min = Math.min(nums[i],cur_min+nums[i]);
            maxi = Math.max(cur_max,maxi);
            mini = Math.min(cur_min,mini);
        }
        return Math.max(maxi,-mini);
    }
}
```
- Python3
```
class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        maxi,mini = -2**31 , 2**31 -1
        cur_max,cur_min = 0,0
        for i in range(0,len(nums)):
            cur_max = max(cur_max+nums[i],nums[i]);
            cur_min = min(cur_min+nums[i],nums[i])
            maxi = max(cur_max,maxi)
            mini = min(cur_min,mini)
        return max(maxi,-mini)
```
- JavaScript
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    maxi = Number.MIN_VALUE , mini = Number.MAX_VALUE
    cur_max = 0, cur_min = 0
    for(let i=0; i<nums.length; i++){
        cur_max = Math.max(cur_max+nums[i],nums[i])
        cur_min = Math.min(cur_min+nums[i], nums[i])
        maxi = Math.max(maxi,cur_max)
        mini = Math.min(mini,cur_min)
    }
    return Math.max(maxi,-mini)
};
```


