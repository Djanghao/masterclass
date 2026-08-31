# Max Consecutive Ones Solution in C++

**Author:** The_Kunal_Singh
**Votes:** 45
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/3453972/](https://leetcode.com/problems/max-consecutive-ones/solutions/3453972/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

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
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int i, count=0, max=0;
        for(i=0 ; i<nums.size() ; i++)
        {
            if(nums[i]==1)
            {
                count++;
                if(count>max)
                {
                    max = count;
                }
            }
            else
            {
                count=0;
            }
        }
        return max;
    }
};
```
![upvote new.jpg](./images/0.jpeg)
