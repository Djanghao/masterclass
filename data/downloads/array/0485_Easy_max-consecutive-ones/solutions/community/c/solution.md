# Three line Solution :)

**Author:** venkatachandukonduru
**Votes:** 16
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/1221888/](https://leetcode.com/problems/max-consecutive-ones/solutions/1221888/)

---

**Do upvote! If you like it!**
If you need explanation, comment down below I will clear your doubts asap!
```
int findMaxConsecutiveOnes(vector<int>& nums) {
        for(int i=1;i<nums.size();i++)
            nums[i]==0 ? nums[i]=0 : nums[i]+=nums[i-1];
        return *max_element(nums.begin(),nums.end());
    }
```