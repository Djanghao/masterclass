# [C++] Simple solution

**Author:** shubhambhatt__
**Votes:** 26
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/669734/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/669734/)

---

***Pls upvote if you find this helpful  :)***
Keep the length of each increasing sequence in a variable and one global variable for updating it with all the lengths of increasing sequences.
```
class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) {
        if(nums.size()<=1)return nums.size();
        int answer=1,count=1;
        for(int i=0;i<nums.size()-1;i++){
            if(nums[i]<nums[i+1]){
                count++;
                answer=max(answer,count);
            }
            else{
                count=1;
            }
        }
        return answer;
    }
};
```