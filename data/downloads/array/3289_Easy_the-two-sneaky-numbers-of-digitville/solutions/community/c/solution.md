# C++ | Maps | Simple Solution | O(n) | 🔥 | Time and Space Complexity

**Author:** anubhvshrma18
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5788771/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5788771/)

---

```
class Solution {
public:
    vector<int> getSneakyNumbers(vector<int>& nums) {
        unordered_map<int, int> mp;
        vector<int> ans;
        for(auto i:nums) {
            mp[i]++;
            if(mp[i]>1) {
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```

Time Complexity - O(N)
Space Complexity - O(N)