# simple Solution Java,CPP,Python,C language ✅ || Runtime 1 ms✅ || Beats 100% ✅

**Author:** sourabh-jadhav
**Votes:** 893
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/3167663/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/3167663/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```java []
class Solution {
    public int[] runningSum(int[] nums) {

        for(int i=1;i<nums.length;i++){
            nums[i]=nums[i-1]+nums[i];

        }
        return nums;
    }
}
```
```Cpp []
class Solution {

public:
    vector<int> runningSum(vector<int>& nums) {
        for(int i=1;i<nums.size();i++){

            nums[i]+=nums[i-1];

        }

        return nums;
    }
};
```
```Python []
class Solution(object):
    def runningSum(self, nums):
        for i in range(1,len(nums)):
            nums[i]+=nums[i-1]
        return nums
```
```C []

int* runningSum(int* nums, int numsSize, int* returnSize){
    int sum=0;
    *returnSize = numsSize; //size for the new array to be returned
    
for(int i=1;i<numsSize;i++)
    {
        nums[i]+=nums[i-1];
    }
    return nums;
}
```



![478xve.jpg](./images/0.jpeg)
