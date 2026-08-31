# ✅✅✅ C++ Solution using Map || Very Simple and Easy to Understand

**Author:** kreakEmp
**Votes:** 109
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/2783127/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/2783127/)

---

<b>Up Vote if you like the solution
```

/*
Approach is to store the elements in a map and using sliding window technique
check if the size of map is equal to k on each window. The window which has map size equal to k
is having distict elements.

1. Store first k elements in the map.
2. Then keep traversing through the array and adding the new one to the map and 
removing the old one(i-k th) element form the map if its count is zero.
3. Do same for the total sum, add ith value and remove i-k th value.
4. Maximize ans by taking max sum value. 
*/

class Solution {
public:
    long long maximumSubarraySum(vector<int>& nums, int k) {
        long long ans = 0, sum = 0;
        unordered_map<int, int> mp;
        int i = 0;
        while(i < k  && i < nums.size()){ // store first k elements in the map
            mp[nums[i]]++;
            sum += nums[i];
            i++;
        }
        if(mp.size() == k) ans = sum; // if all distinct, then ans = sum 
        while(i < nums.size()){
            mp[nums[i]]++;
            mp[nums[i-k]]--;
            if(mp[nums[i-k]] == 0) mp.erase(nums[i-k]);
            
            sum += nums[i];
            sum -= nums[i-k];
            if(mp.size() == k) ans = max(ans, sum);
            i++;
        }
        return ans;
    }
};
```
---


<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted


---