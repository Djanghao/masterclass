# C++ // 10%

**Author:** paulsepolia
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/509814/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/509814/)

---

class Solution 
{
    public:
    
    int validSubarrays(std::vector<int>& nums) 
    {
        int res = 0;
        
        for(size_t i = 0; i < nums.size(); i++)
        {
            for(size_t j = i; j < nums.size(); j++)
            {
                if(nums[i] <= nums[j])
                {
                    res++;
                }
                else
                {
                    break;
                }
            }
        }
        
        return res;
    }
};