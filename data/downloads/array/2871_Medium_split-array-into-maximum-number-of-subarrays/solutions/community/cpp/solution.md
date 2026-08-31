# LeetCode Explained ✅☑[C++] || Beats 100% || EXPLAINED🔥

**Author:** coder_kashif
**Votes:** 20
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4109976/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4109976/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

- We know the result of a bitwise AND operation between two binary numbers can only be 0 or 1. 
- We initialize a variable a to INT_MAX. This is because the bitwise AND of the maximum possible value (INT_MAX) and any number will give us that number itself. (Note: INT_MAX in binary is 01111111111111111111111111111111)

- Next, we calculate the bitwise AND of all the elements in the nums array. If this result is not equal to 0, it means that there is at least one subarray where the bitwise AND equal to one. In this case, the minimum possible answer is 1.

- If the result from step 3 is 0, it implies that there exists at least one subarray with a bitwise AND equal to 0. In this scenario, we proceed to find other subarrays that can also have a bitwise AND equal to 0.

- We count and track the subarrays that meet this condition and return the count as our final answer.




# Code
```
class Solution {
public:
    int maxSubarrays(vector<int>& nums) {
        int a=INT_MAX;
        for(auto it:nums)a&=it;
        if(a!=0)return 1;
        int b=INT_MAX;
        int count=0;
        for(auto it:nums){
            b&=it;
            if(b==0){
                count++;
                b=INT_MAX;
            }
        }
        return count;
    }
};
```