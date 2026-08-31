# ✅C++ | ✅2 pointers approach | ✅Easy Approach

**Author:** Yash2arma
**Votes:** 60
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2708051/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2708051/)

---

**Please upvote if you find this solution helpful :)**
```
class Solution 
{
public:
    int findMaxK(vector<int>& nums) 
    {
        sort(nums.begin(), nums.end());
        int low=0, high=nums.size()-1;
        
        while(low < high)
        {
            if((nums[low] + nums[high]) == 0)
            {
                return  nums[high];
            }
            
            else if((nums[low] + nums[high]) < 0)
                low++;
            
            else high--;
        }
        return -1;
    }
};
```