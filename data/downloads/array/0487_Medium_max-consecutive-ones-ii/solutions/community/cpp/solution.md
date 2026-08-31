# Easy to Understand C++ Solution | O(n) Time | O(1) Space

**Author:** tsehon
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1658839/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1658839/)

---

This solution takes a different approach. Instead of tracking indices, we keep track of two counters, one for the longest consecutive streak *including* the most recent flipped zero, **flipped**, and the other to keep track of the longest consecutive streak of ones since the most recent zero (i.e. the uninterrupted streak of ones), **unflipped**. 

We loop through the input array in one pass, incrementing both **flipped** and **unflipped** if we encounter a one. Once we encounter a zero, we have reached the end of our current streak of ones, so we update our result, **res**, then set **flipped** to the most recent uninterrupted streak (incremented by 1, to include the zero we are now "flipping"), **unflipped+1**, and reset **unflipped**.  We continue to loop until we reach the end of **nums**.

We update **res** one last time after the loop terminates, to catch the case that the last index of **nums** contained a 1, and then return. 

Here's the code: 
```
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int res = 0;
        int flipped = 0, unflipped = 0;
        
        for (int i=0; i<nums.size(); i++) {
            if (nums[i]) {
                flipped++;
                unflipped++;
            } else {
                res = max(res, flipped);
                flipped = unflipped+1;
                unflipped = 0;
            }
        }
        
        res = max(res, flipped);
        return res;
    }
};
```