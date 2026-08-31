# C++ Monotonic Stack Based Solution | O(N) Time O(N) Space

**Author:** emblaze
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/1889967/](https://leetcode.com/problems/maximum-width-ramp/solutions/1889967/)

---

```
class Solution {
public:
    int maxWidthRamp(vector<int>& nums) {
        //INTUITION: Using a monotonic stack to know the ramps.
        
        //ALGO: Store indexes of numbers in descending order, while travelling from left to right of vector in the stack
        //Now moving in opp. direction (from right to left) of the vector, we find if an element makes a ramp with the element at the top of the stack. 
        //We move from right to left, just because we want the longest width ramp first.
        //As we get a ramp, we keep updating our answer width.
        
          stack<int> s; //will be used to store indexes of numbers in increasing order(from top to bottom)
        int ans = 0; //width of ramp 
        for(int i = 0; i<nums.size(); i++)
            if(s.empty() || nums[s.top()]>nums[i]) //storing encountered nos. index only in ascending order from top to bottom of the nos. at those indexes
                s.push(i);
        for(int i = nums.size()-1; i>ans; i--) //i>ans because if we have the max length of ramp as ans, we don't need to consider any ramp of width smaller than it
            while(!s.empty() && nums[s.top()]<=nums[i]) //moving from right side of the array and checking for ramps
                ans = max(ans, i-s.top()), s.pop(); //if found update the length of ramp to maximum and pop the index from stack
        
        return ans;
    }
};
```