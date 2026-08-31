# C++ | EASY TO UNDERSTAND | 0ms Beats 100% | ONE ITERATION

**Author:** Aarsh_bhargava
**Votes:** 8
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/3230161/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/3230161/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
C++ | EASY TO UNDERSTAND | 0ms Beats 100% | ONE ITERATION 

# Approach
<!-- Describe your approach to solving the problem. -->
In order to store the highest integer together with its index, we must first iterate through the array.

The array is then sorted, and we access the highest and second highest elements to check the condition.

Since the second-highest has the largest possibility of exceeding the condition.
We check , 

We return the index of the highest if it is more than twice as high as the second highest.
Otherwise we return -1

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    Runtime 0 ms, Beats 100%

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    Memory 10.9 MB, Beats 69.10%
# Code
```
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int a,c=0;
        for(int i=0;i<nums.size();i++)
        {
            if(c < nums[i])
            {
                c = nums[i];
                a = i;
            }
        }
        sort(nums.begin(),nums.end());
        if(c >= 2*nums[nums.size()-2])
        {
            return a;
        }
        else
        {
            return -1;
        }
    }
};
```