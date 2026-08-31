# C++ Easy to understand O(n) greedy solution

**Author:** Mdkaif2938
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/3206485/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/3206485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Firstly we will calculate the total sum of array
Then find how far are we from the goal
then calculate the number of elements needed to reach the GOAL.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    int minElements(vector<int>& nums, int limit, int goal) {
        
        long long int sum = 0, diff;

        //finding total sum of array
        for(int x = 0; x < nums.size(); x++)sum+=nums[x];

        //calculating absolute difference of goal and sum
        diff = (goal>=sum) ? goal-sum : sum-goal;

        //calculate number of elements(<=limit) to fulfill the difference 
        return (diff%limit) ? diff/limit+1 : diff/limit;
    }
};
```