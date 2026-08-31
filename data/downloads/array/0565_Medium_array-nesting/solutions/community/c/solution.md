# C++ Simple and Easy Explained Solution, O(n) TC, O(1) SC

**Author:** YehudisK
**Votes:** 32
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1438244/](https://leetcode.com/problems/array-nesting/solutions/1438244/)

---

**Idea:**
We try to start from each index and build the set as in the problem statement.
To check for duplicates, we will change each visited number to -1.
**Time Complexity:** O(n) - we visit each element once.
**Space Complexity:** O(1) - we use only constant extra space.
```
class Solution {
public:
    int arrayNesting(vector<int>& nums) {
        int res = 0, curr, count, prev;
        
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == -1) continue;
            
            curr = nums[i], count = 1, nums[i] = -1;
            
            while (nums[curr] != -1) {
                prev = curr;
                curr = nums[curr];
                nums[prev] = -1;
                count++;
            }
            
            res = max(res, count);
        }
        
        return res;
    }
};
```
**Like it? please upvote!**