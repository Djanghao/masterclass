# ✅ C++ || EASY || DETAILED EXPLAINATION || OPTIMIZED

**Author:** ayushsenapati123
**Votes:** 504
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/2727290/](https://leetcode.com/problems/contains-duplicate-ii/solutions/2727290/)

---

**PLEASE UPVOTE IF YOU FIND MY APPROACH HELPFUL, MEANS A LOT \uD83D\uDE0A**
**Time** and **Space** Complexity => `O(n)`, where n is the size of nums
```
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int,int> mp;
        int n = nums.size();
        
        for(int i=0; i<n; i++)
        {
            // mp.count() will tell whatever ith index that I want, have I seen it before?
            if(mp.count(nums[i]))
            {
                // if I have already seen this number, then check for condition abs(i - j) <= k
                if(abs(i-mp[nums[i]])<=k)
                    return true;
            }
            // if I have not seen this number before, insert the number with its position in the map
            // and if the number is already present in the map, then update the position of that number
            mp[nums[i]] = i;
        }
        // after the complete traversal, if we don't find a pair to satisfy the condition, return false
        return false;
    }
};
```

![image](./images/0.png)
