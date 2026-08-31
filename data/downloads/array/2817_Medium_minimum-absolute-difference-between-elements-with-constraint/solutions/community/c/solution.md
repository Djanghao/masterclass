# C++ | Multiset | Binary Search | Easy to Understand

**Author:** Rishabhsinghal12
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901607/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901607/)

---

```
class Solution {
public:
    int minAbsoluteDifference(vector<int>& nums, int x) {
        int result = 1e9, size = nums.size();
        multiset<int> window;
        
        for(int i = x; i < size; i++) {
            window.insert(nums[i]);
        }
        
        for(int i = 0; i < size - x; i++) {
            auto lower = window.lower_bound(nums[i]);
            
            if(lower != window.end()) result = min(result, abs(nums[i] - *lower));
            
            lower--;
            if(lower != window.end()) result = min(result, abs(nums[i] - *lower));
            
            window.erase(window.find(nums[i+x]));
        }
        
        return result;
    }
};
```