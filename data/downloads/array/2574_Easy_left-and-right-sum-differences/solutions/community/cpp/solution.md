# Simple total sum & partial sum - O(n) time & O(1) space

**Author:** kreakEmp
**Votes:** 77
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3231177/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3231177/)

---

Up vote if you like the solution 

# Approach
First evaluate rsum by taking sum of all elements
then while iterating, keeep adding new element to lsum and subtracting it from the rsum.

# Code
```
    vector<int> leftRigthDifference(vector<int>& nums) {
        vector<int> ans;
        int lsum = 0, rsum = 0;
        for(int i = 0; i < nums.size(); ++i ) rsum += nums[i];
        for(int i = 0; i < nums.size(); ++i){
            rsum -= nums[i];
            ans.push_back(abs(lsum - rsum));
            lsum += nums[i];
        }
        return ans;
    }
```

Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted