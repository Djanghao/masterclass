# C++ || Clean & Concise Code || O(N) Time Complexity

**Author:** sahil2311sharma
**Votes:** 56
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/1190695/](https://leetcode.com/problems/non-decreasing-array/solutions/1190695/)

---

```
class Solution {
public:
    bool checkPossibility(vector<int>& nums) 
    {
        for(int i=0;i<nums.size()-1;i++)
        {
            if(nums[i]>nums[i+1])
            {
                 if(i-1>=0&&nums[i-1]>nums[i+1])
                {
                    nums[i+1]=nums[i];
                }
                else
                {
                    nums[i]=nums[i+1];
                }
                break;
            }
        }
        for(int i=0;i<nums.size()-1;i++)
        {
            if(nums[i]>nums[i+1])
            {
                return false;
            }
        }
        return true; 
        
    }
};
```
**Please help to UPVOTE if this post is useful for you.**

**If you have any questions, feel free to comment below.**

**HAPPY CODING :)**