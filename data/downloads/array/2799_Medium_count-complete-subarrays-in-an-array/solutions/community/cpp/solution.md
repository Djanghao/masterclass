# Sliding window || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3836318/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3836318/)

---

### Up vote if you like the solution

# Approach
- We need to take a map and keep on adding new elements. 
- Update front element and check if the size of the map is same as that of the size when all elemets are added.
- Then update the back pointer untill we satisfy the above case.
- While updating the back pointer, keep evaluating the ans. So to update ans, we see it like the start point of the sub array is "back" and the end can be any value from [fornt to end].

# Code
```
int countCompleteSubarrays(vector<int>& nums) {
    unordered_map<int, int> mp, all; 
    for(auto n: nums) all[n]++;      //put all elements to get the size of discrete elements
    int front = 0, back = 0, ans = 0;
    while(front < nums.size()){
        mp[nums[front]]++;
        while(back <= front && mp.size() == all.size()){
            if(--mp[nums[back]] == 0) mp.erase(nums[back]);  //update back pointer and map untill the condition satisfy
            back++;
            ans += (nums.size() - front);  //update answer - with number of array possible starting at pointer value of "back"
        }
        front++;
    }
    return ans;
}
```

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted