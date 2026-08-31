# Explained - Multiply all zero counts between 1's

**Author:** kreakEmp
**Votes:** 43
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679176/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679176/)

---

<b>Up vote if you like the solution</b>
# Approach
1. Eliminate initial zeros. Check if iteration reached end or not. If reached then return 0 as there are no 1s in the input.
2. Strat counting 0's between two 1s and mulitply (count + 1) to ans, as we can have n+1 number of division possible in between those two 1's

# Code
```
int numberOfGoodSubarraySplits(vector<int>& nums) {
    long long ans = 1, m = 1000000007, count  = 0;
    int i = 0;
    while(i < nums.size() && nums[i] == 0) ++i;
    if(i >= nums.size() ) return 0;
    while(i < nums.size()){
        if(nums[i] == 1){  ans = (ans * (count +1 ))%m;  count = 0; }
        else count++;
        i++;
    }
    return ans;
}
```

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted